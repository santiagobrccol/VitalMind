const express = require('express');
const router = express.Router();
const Answer = require('./model_answers');


router.get('/', (request, response) => {
    Answer.find((error, answers) => {
        if (error !== null) {
            response.statusCode(500).send(error);
        } else {
            response.send(answers);
        }
    })
})


router.get('/:id', (request, response) =>{
    Answer.findById( request.params.id, PROYECCION, (error, answer) => {
        if (error !== null) {
            response.status(500).send(error);
        } else {
            response.send(answer);
        }
    })
})

router.post('/', (request, response) => {
    const newAnswer = new Question(request.body)
    newAnswer.save((error, answerIncluded) =>{
        if (error !== null) {
            response.status(500).send(error)
        } else {
            response.send(answerIncluded)
        }
    })
})

router.put('/:id', (request, response ) => {
    //console.log('request.body', request.body)
    Answer.updateOne({ _id: request.params.id }, request.body, (error, answerUpdated) =>{
        if (error !== null) {
            response.status(422).send(error)
        } else {
            response.send(answerUpdated)
        }
    })

})

router.delete('/:id', (request, response) => {
    Answer.findByIdAndDelete(request.params.id, (error, answerDeleted) =>{
        if (error !== null) {
            response.status(500).send(error)
        } else {
            response.status(204).send(answerDeleted)
        }
    })
})


module.exports = router