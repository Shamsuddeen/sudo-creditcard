// Initialize express router
const express = require('express');
const {
    getUsers,
    getUser,
    updateUser
} = require('../Controller/users');

const User = require('../Model/User');
const router = express.Router({ mergeParams: true });
const advancedResults = require('../Middleware/advancedResults');

const {
    protect,
    authorize
} = require('../Middleware/auth');
// user routes
router
    .route('/')
    .post(protect, authorize('admin'), advancedResults(User), getUsers)
router
    .route('/:id')
    .post(protect, getUser)
    .put(protect, authorize('admin'), updateUser);
module.exports = router;