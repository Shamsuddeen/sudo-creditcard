// Initialize express router
const express = require('express');
const {
    getCards,
    getCard,
    getUserCard,
    createCard,
    simulateTransaction,
    updateCard
} = require('../Controller/cards');
const Card = require('../Model/Card');
const router = express.Router({ mergeParams: true });
const advancedResults = require('../Middleware/advancedResults');

const {
    protect,
    authorize
} = require('../Middleware/auth');

// user routes
router
    .route('/')
    .post(protect, authorize('admin'), advancedResults(Card), getCards)
    .post(protect, authorize('admin'), createCard);
router
    .route('/:id')
    .post(protect, authorize('admin'), getCard)
    .put(protect, authorize('admin'), updateCard);
router
    .route('/user/:user')
    .post(protect, authorize('admin'), getUserCard);
router
    .route('/simulate/:id')
    .post(protect, authorize('admin'), simulateTransaction);

module.exports = router;