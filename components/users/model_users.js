const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    sex: String,
    username: String,
    phone: String,
    email: String,
    dateOfBirth: Date,
    password: String,
    answers_q: Array
});

const User = mongoose.model('users',  userSchema);

module.exports = User



