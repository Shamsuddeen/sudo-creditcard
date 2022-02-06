const express = require('express');
const {
    register,
    login,
    logout
} = require('../Controller/auth');

const router = express.Router();

// const {
//     protect
// } = require('../Middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

module.exports = router;