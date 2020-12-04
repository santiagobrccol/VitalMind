const mongoose = require('mongoose')


const questionnaireSchema = new mongoose.Schema({

    pages: Array

});

const Questionnaire = mongoose.model('questionnaire',  questionnaireSchema);

module.exports = Questionnaire