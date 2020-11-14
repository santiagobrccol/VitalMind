const express = require('express')
const router = express.Router()
const Question = require('./model_questions')


router.get('/', (request, response) => {
    Question.find((error, questions) => {
        if (error !== null) {
            response.statusCode(500).send(error)
        } else {
            response.send(questions)
        }
    })
})


router.get('/:id', (request, response) =>{
    Question.findById( request.params.id, /**PROYECCION*/ (error, question) => {
        if (error !== null) {
            response.status(500).send(error)
        } else {
            response.send(question)
        }
    })
})

router.post('/', (request, response) => {
    const newQuestion = new Question(request.body)
    newQuestion.save((error, questionIncluded) =>{
        if (error !== null) {
            response.status(500).send(error)
        } else {
            response.send(questionIncluded)
        }
    })
})

router.put('/:id', (request, response ) => {
    console.log('request.body', request.body)
    Question.updateOne({ _id: request.params.id }, request.body, (error, questionUpdated) =>{
        if (error !== null) {
            response.status(422).send(error)
        } else {
            response.send(questionUpdated)
        }
    })

})






module.exports = router


