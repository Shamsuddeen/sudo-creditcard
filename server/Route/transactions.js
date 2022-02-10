// Initialize express router
const express = require('express');
const {
    getTransactions,
    getTransaction,
    getUserTransaction,
    updateTransaction
} = require('../Controller/transactions');
const Transaction = require('../Model/Transaction');
const router = express.Router({ mergeParams: true });
const advancedResults = require('../Middleware/advancedResults');

const {
    protect,
    authorize
} = require('../Middleware/auth');

// user routes
router
    .route('/')
    .post(protect, authorize('admin'), advancedResults(Transaction), getTransactions);
router
    .route('/:id')
    .post(protect, authorize('admin'), getTransaction)
    .put(protect, authorize('admin'), updateTransaction);
router
    .route('/user/:user')
    .post(protect, authorize('admin'), getUserTransaction);

module.exports = router;