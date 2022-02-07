const ErrorResponse = require('../Utils/errorResponse');
const asyncHandler = require('../Middleware/async');
const sendRequest = require('../Utils/sendRequest');
const User = require('../Model/User');
const Card = require('../Model/Card');


exports.cardAuthorization = asyncHandler(async (req, res, next) => {
    const card = await Card.findOne({
        cardId: req.data.card._id
    });

    if (!card._id) {
        return next(new ErrorResponse("Card not found!", 404));
    }
    // {
    //     "_id": "61c85ea290355e0de7c78974",
    //     "type": "authorization.request",
    //     "pendingWebhook": false,
    //     "webhookArchived": false,
    //     "environment": "development",
    //     "business": "61a1cc1abe4cea7fb487eba3",
    //     "data": {
    //       "amount": 10000,
    //       "fee": 5,
    //       "vat": 0.375,
    //       "approved": false,
    //       "currency": "NGN",
    //       "status": "pending",
    //       "authorizationMethod": "chip",
    //       "merchantAmount": 2,
    //       "merchantCurrency": "NGN",
    //       "customer": { ... },
    //       "card": { ... },
    //       "account": { ... },
    //       "merchant": { ... },
    //       "terminal": { ... },
    //       "transactionMetadata": { ... },
    //       "pendingRequest": { ... },
    //       "verification": { ... },
    //       "feeDetails": { ... }
    //     }
    // }

    if (req.type == "authorization.request") {
        const amount = req.data.amount;
        const channel = req.data.transactionMetadata.channel;

        /*
         Check if the card status
         If the card statcus is active
         Check it Transaction Channel is allowed on the card
        */
        if (card.active === true) {
            if (card.channels.channel === true) {
                res.json({
                    "statusCode": 200,
                    "responseCode": "00",
                })
            } else {
                // return next(new ErrorResponse("Payment Channel not allowed!", 400));
                res.json({
                    "statusCode": 400,
                    "responseCode": "62", // Restricted card
                })
            }
        } else {
            // return next(new ErrorResponse("Card is OFF!", 400));
            res.json({
                "statusCode": 400,
                "responseCode": "62", // Restricted card
            })
        }
    }
});