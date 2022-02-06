const ErrorResponse = require('../Utils/errorResponse');
const asyncHandler = require('../Middleware/async');
const User = require('../Model/User');

exports.getUsers = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

exports.getUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id, (err, data) => {
        if (!data) {
            return next(new ErrorResponse("User not foud!", 404));
        } else {
            res.status(200).json({
                success: true,
                status: "success",
                data: data
            })
        }
    })
});

// exports.createUser = asyncHandler(async (req, res, next) => {
//     const user = await User.create(req.body);

//     res.status(201).json({
//         status: "success",
//         message: 'User created successfully',
//         data: user
//     });
// });