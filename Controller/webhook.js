const ErrorResponse = require('../Utils/errorResponse');
const asyncHandler = require('../Middleware/async');
const User = require('../Model/User');
const Card = require('../Model/Card');


exports.cardAuthorization = asyncHandler(async (req, res, next) => {
    const card = await Card.findOne({
        cardId: req.data.card._id
    });

    if (!card._id) {
        return next(new ErrorResponse("Card not found!", 404));
    }

    if (req.type == "authorization.request") {
        const amount = req.data.amount;
        const channel = req.data.transactionMetadata.channel;
        const totalCredit = card.usedCredit + amount;
        const newBalance = card.balance -totalCredit;
        /*
         Check if the card status
         If the card statcus is active
         Check it Transaction Channel is allowed on the card
        */
        if (card.active === true) {
            card.channels.forEach(item => {
                // console.log(item[channel]);
                if (item[channel] === true) {
                    // Check if exceed credit limit
                    if (totalCredit <= card.maxCredit) {
                        // Updated Card and Send response
                        const updateFields = {
                            usedCredit: totalCredit,
                            balance: newBalance
                        };
                        await Card.findOneAndUpdate({
                            cardId: req.data.card._id
                        }, updateFields);

                        res.json({
                            "statusCode": 200,
                            "responseCode": "00",
                        })
                    } else {
                        res.json({
                            "statusCode": 400,
                            "responseCode": "51", // Insufficient fund
                        })
                    }
                } else {
                    // return next(new ErrorResponse("Payment Channel not allowed!", 400));
                    res.json({
                        "statusCode": 400,
                        "responseCode": "62", // Restricted card
                    })
                }
            })
        } else {
            // Card is OFF
            // return next(new ErrorResponse("Card is OFF!", 400));
            res.json({
                "statusCode": 400,
                "responseCode": "62", // Restricted card
            })
        }
    }
});