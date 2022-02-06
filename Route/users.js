// Initialize express router
const express = require('express');
const {
    getUsers,
    getUser,
    createUser
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
    .get(protect, authorize('admin'), advancedResults(User), getUsers)
    .post(createUser);
router
    .route('/:id')
    .get(getUser);

module.exports = router;