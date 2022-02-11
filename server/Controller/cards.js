const ErrorResponse = require('../Utils/errorResponse');
const asyncHandler = require('../Middleware/async');
const sendRequest = require('../Utils/sendRequest');
const User = require('../Model/User');
const Card = require('../Model/Card');

exports.getCards = asyncHandler(async (req, res, next) => {
    const cards = await Card.find();
    res.status(200).json({
        status: "success",
        count: cards.length,
        message: 'Cards fetched successfully',
        data: cards
    });
});

exports.getCard = asyncHandler(async (req, res, next) => {
    const card = await Card.findById(req.params.id);

    if (!card._id) {
        return next(new ErrorResponse("Card not found!", 404));
    }
    res.status(200).json({
        status: "success",
        message: 'Card fetched successfully',
        data: card
    })
});

exports.simulateTransaction = asyncHandler(async (req, res, next) => {
    const card = await Card.findById(req.params.id);

    if (!card._id) {
        return next(new ErrorResponse("Card not found!", 404));
    }

    const simulate = await sendRequest('/cards/' + card.cardId + '/simulate/authorization', 'post', {
        channel: req.body.channel,
        type: req.body.type,
        amount: req.body.amount,
        currency: "NGN",
        merchant: {
            category: "7399",
            merchantId: "000000001",
            name: "Bitako Inc",
            city: "Zing",
            state: "TR",
            country: "NG"
        }
    });
    res.send(simulate);
    // res.status(200).json({
    //     status: "success",
    //     message: 'Card fetched successfully',
    //     data: card
    // })
});

exports.getUserCard = asyncHandler(async (req, res, next) => {
    const card = await Card.findOne({ user: req.params.user });

    if (card == null) {
        return next(new ErrorResponse("Card not found!", 404));
    }
    res.status(200).json({
        status: "success",
        message: 'Card fetched successfully',
        data: card
    })
});

exports.createCard = asyncHandler(async (req, res, next) => {
    // Check if user exists
    const user = await User.findById(req.body.user);
    if (!user._id) {
        return next(new ErrorResponse("User not found!", 404));
    }
    // console.log(user);
    const name = user.firstName + ' ' + user.lastName
    // // Create Card Holder
    const customer = await sendRequest('/customers', 'post', {
        type: 'individual',
        name: name,
        phoneNumber: user.phone,
        emailAddress: user.email,
        status: "active",
        individual: {
            firstName: user.firstName,
            lastName: user.lastName
        },
        billingAddress: {
            line1: "4 Barnawa Close",
            line2: "Off Challawa Crescent",
            city: "Barnawa",
            state: "Kaduna",
            country: "NG",
            postalCode: "800001"
        }
    });
    // console.log(customer);
    if (customer.statusCode != 200) {
        return next(new ErrorResponse("Unable to Create customer", 400));
    }
    const update = await sendRequest('/customers/'+customer.data._id, 'put', {
        type: 'individual',
        name: name,
        phoneNumber: user.phone,
        emailAddress: user.email,
        status: "active",
        individual: {
            firstName: user.firstName,
            lastName: user.lastName
        }
    });
    console.log('====================================');
    console.log(update);
    console.log('====================================');

    // Map Card to Customer
    const card = await sendRequest('/cards', 'post', {
        customerId: update.data._id,
        type: "virtual",
        number: "5061000000000000001",
        currency: "NGN",
        status: "active",
        brand: "Verve",
        fundingSourceId: "6206776859a4165e9ed503c4",
        metadata: {},
        spendingControls: {
            channels: {
                atm: true,
                pos: true,
                web: true,
                mobile: true
            },
            allowedCategories: [],
            blockedCategories: [],
            spendingLimits: [{
                amount: 100000,
                interval: "daily"
            }]
        }
    });
    console.log(card);
    if (card.statusCode != 200) {
        return next(new ErrorResponse("Request Error, Unable to create card", 400));
    }

    // Save Card to DB
    const result = await Card.create({
        user: req.body.user,
        cardId: card.data._id,
        customerId: update.data._id,
        pan: card.data.maskedPan,
        expiry: card.data.expiryMonth + '/' + card.data.expiryYear,
        brand: card.data.brand,
        channels: {
            atm: false,
            pos: false,
            web: true,
            mobile: true
        }
    });

    res.status(201).json({
        status: "success",
        message: 'Card created successfully',
        data: result
    });
});

exports.updateCard = asyncHandler(async (req, res, next) => {
    const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        status: "success",
        data: card
    });
});