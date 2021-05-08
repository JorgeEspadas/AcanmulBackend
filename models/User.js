const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        default: 0
    },
    phone: {
        type: String,
        required: true
    },
    token: {
        type: String
    }
});

module.exports = mongoose.model('Users', UserSchema);