// Initialize express router
const express = require('express');
const {
    cardAuthorization
} = require('../Controller/webhook');

const router = express.Router({ mergeParams: true });

const {
    protect,
    authorize
} = require('../Middleware/auth');

// webhook routes
router
    .route('/card-authorization')
    .post(protect, authorize('admin'), cardAuthorization);

module.exports = router;