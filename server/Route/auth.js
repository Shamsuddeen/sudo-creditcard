const express = require('express');
const {
    register,
    login,
    getMe,
    logout
} = require('../Controller/auth');

const router = express.Router();

// const {
//     protect
// } = require('../Middleware/auth');

router.post('/register', register);
router.post('/user', getMe);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;