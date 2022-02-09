const ErrorResponse = require('../Utils/errorResponse');
const asyncHandler = require('../Middleware/async');
const sendRequest = require('../Utils/sendRequest');
const User = require('../Model/User');
const Transaction = require('../Model/Transaction');

exports.getTransactions = asyncHandler(async (req, res, next) => {
    const transactions = await Transaction.find();
    res.status(200).json({
        status: "success",
        count: transactions.length,
        message: 'Transactions fetched successfully',
        data: transactions
    });
});

exports.getTransaction = asyncHandler(async (req, res, next) => {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction._id) {
        return next(new ErrorResponse("Transaction not found!", 404));
    }
    res.status(200).json({
        status: "success",
        message: 'Transaction fetched successfully',
        data: transaction
    })
});

exports.getUserTransaction = asyncHandler(async (req, res, next) => {
    const transaction = await Transaction.find({ user: req.params.user });

    // if (!transaction._id) {
    //     return next(new ErrorResponse("Transaction not found!", 404));
    // }
    res.status(200).json({
        status: "success",
        message: 'Transaction fetched successfully',
        data: transaction
    })
});

exports.updateTransaction = asyncHandler(async (req, res, next) => {
    const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        status: "success",
        data: transaction
    });
});