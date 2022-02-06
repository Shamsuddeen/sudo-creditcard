// Initialize express router
const express = require('express');
const {
    getCards,
    getCard,
    createCard
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
    .get(protect, authorize('admin'), advancedResults(Card), getCards)
    .post(protect, authorize('admin'), createCard);
router
    .route('/:id')
    .get(getCard);

module.exports = router;