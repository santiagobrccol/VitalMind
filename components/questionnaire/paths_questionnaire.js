const express = require('express');
const router = express.Router();
const Questionnaire = require('./model_questionnaire');


router.get('/', (request, response) => {
    Questionnaire.find((error, questionnaires) => {
        if (error !== null) {
            response.statusCode(500).send(error);
        } else {
            response.send(questionnaires);
        }
    })
})


router.get('/:id', (request, response) =>{
    Questionnaire.findById( request.params.id, PROYECCION, (error, answer) => {
        if (error !== null) {
            response.status(500).send(error);
        } else {
            response.send(answer);
        }
    })
})

router.post('/', (request, response) => {
    const newQuestionnaire = new Questionnaire(request.body)
    newQuestionnaire.save((error, questionnaireIncluded) =>{
        if (error !== null) {
            response.status(500).send(error)
        } else {
            response.send(questionnaireIncluded)
        }
    })
})

router.put('/:id', (request, response ) => {
    //console.log('request.body', request.body)
    Questionnaire.updateOne({ _id: request.params.id }, request.body, (error, questionnaireUpdated) =>{
        if (error !== null) {
            response.status(422).send(error)
        } else {
            response.send(questionnaireUpdated)
        }
    })

})

router.delete('/:id', (request, response) => {
    Questionnaire.findByIdAndDelete(request.params.id, (error, questionnaireDeleted) =>{
        if (error !== null) {
            response.status(500).send(error)
        } else {
            response.status(204).send(questionnaireDeleted)
        }
    })
})


module.exports = router