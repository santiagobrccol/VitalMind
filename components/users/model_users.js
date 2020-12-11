const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    gender: String,
    userName: String,
    phone: String,
    email: String,
    dateOfBirth: Date,
    password: String,
    answers_q: Array,
    level: Number
});

const User = mongoose.model('users',  userSchema);

module.exports = User



