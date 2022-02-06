const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your Fullname'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please enter your Email address'],
        trim: true,
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please enter a valid email address'
        ]
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    phone: {
        type: String,
        required: [true, 'Please enter your Phone Number'],
        trim: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('users', userSchema);