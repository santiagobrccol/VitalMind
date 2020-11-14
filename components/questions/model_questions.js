const mongoose = require('mongoose')


const questionSchema = new mongoose.Schema({
    
    question: String,
    

});

const Question = mongoose.model('question',  questionSchema);

module.exports = Question




