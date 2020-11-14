const mongoose = require('mongoose')


const answerSchema = new mongoose.Schema({
    
    questionId: {type: mongoose.Schema.Types.ObjectId, ref: 'Question', require: false},
    userID: {type: mongoose.Schema.Types.ObjectId, ref: 'User', require: false},
    answer: Boolean,

});

const Answer = mongoose.model('answer',  answerSchema);

module.exports = Answer