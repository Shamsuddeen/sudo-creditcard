// Initialize express router
const express = require('express');
const {
    cardAuthorization
} = require('../Controller/webhooks');

const router = express.Router({ mergeParams: true });

// const {
//     protect,
//     authorize
// } = require('../Middleware/auth');

// webhook routes
router
    .route('/card-authorization')
    .post(cardAuthorization);

module.exports = router;