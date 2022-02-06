// Initialize express router
const express = require('express');
const {
    getCards,
    getCard,
    createCard
} = require('../Controller/cards');

const router = express.Router({ mergeParams: true });
const {
    protect
} = require('../Middleware/auth');
// user routes
router
    .route('/')
    .get(protect, getCards)
    .post(protect, createCard);
router
    .route('/:id')
    .get(getCard);

module.exports = router;