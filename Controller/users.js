const ErrorResponse = require('../Utils/errorResponse');
const asyncHandler = require('../Middleware/async');
const User = require('../Model/User');

exports.getUsers = asyncHandler(async (req, res, next) => {
    const users = await User.find();
    res.status(200).json({
        status: "success",
        count: users.length,
        message: 'Users fetched successfully',
        data: users
    });
});

exports.getUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    
    if (!user) {
        return next(new ErrorResponse("User not foud!", 404));
    }
    res.status(200).json({
        status: "success",
        message: 'User fetched successfully',
        data: user
    })
});

exports.createUser = asyncHandler(async (req, res, next) => {
    const user = await User.create(req.body);

    res.status(201).json({
        status: "success",
        message: 'User created successfully',
        data: user
    });
});