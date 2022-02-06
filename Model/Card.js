const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId(),
        ref: 'User',
        required: true
    },
    cardId: {
        type: String,
        required: true,
        unique: true
    },
    accountId: {
        type: String,
        required: true,
        unique: true
    },
    balance: {
        type: Number,
        required: false,
        default: 0
    },
    maxCredit: {
        type: Number,
        required: false,
        default: 0
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('cards', cardSchema);