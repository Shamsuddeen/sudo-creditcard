// Initialize express router
const express = require('express');
const {
    getUsers,
    getUser,
    createUser
} = require('../Controller/users');

const router = express.Router({ mergeParams: true });

// user routes
router
    .route('/')
    .get(getUsers)
    .post(createUser);
router
    .route('/:id')
    .get(getUser);

module.exports = router;