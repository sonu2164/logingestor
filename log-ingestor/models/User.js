// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    role: {
        type: String,
        require: true,
    }
});

module.exports = mongoose.model('user', UserSchema);
