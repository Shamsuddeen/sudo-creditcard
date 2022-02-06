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

    if (!card) {
        return next(new ErrorResponse("Card not foud!", 404));
    }
    res.status(200).json({
        status: "success",
        message: 'Card fetched successfully',
        data: card
    })
});

exports.createCard = asyncHandler(async (req, res, next) => {
    const name = req.body.firstName + ' ' + req.body.lastName
    const customer = await sendRequest('/customers', 'post', {
        type: 'individual',
        name: name,
        phoneNumber: req.body.phone,
        emailAddress: req.body.email,
        status: "active",
        individual: {
            firstName: req.body.firstName,
            lastName: req.body.lastName
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
    res.send(customer);
    // const card = await Card.create(req.body);

    // res.status(201).json({
    //     status: "success",
    //     message: 'Card created successfully',
    //     data: card
    // });
});