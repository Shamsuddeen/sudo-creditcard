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

exports.createCard = asyncHandler(async (req, res, next) => {
    // Check if user exists
    const user = await User.findById(req.body.user);
    if (!user._id) {
        return next(new ErrorResponse("User not found!", 404));
    }
    // console.log(user);
    const name = user.firstName + ' ' + user.lastName
    // Create Card Holder
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

    // Map Card to Customer
    const card = await sendRequest('/cards', 'post', {
        customerId: customer.data._id,
        type: "virtual",
        number: "5061000000000000001",
        currency: "NGN",
        status: "active",
        brand: "Verve",
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
        customerId: customer.data._id,
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
    const user = await Card.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        status: "success",
        data: user
    });
});