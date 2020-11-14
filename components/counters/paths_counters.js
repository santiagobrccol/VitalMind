const express = require('express');
const router = express.Router();
const Counter = require('./model_counters')



router.get('/', (request, response) =>{
    Counter.find((error, counters) =>{
        if (error !== null) {
            response.status(500).send('something went wrong')
        } else {
            response.send(counters)
        }
    })
    
})



router.post('/', (request, response) => {

    const newCounter = new Counter(request.body );
    newCounter.save((error, counterSave) =>{
        if(error !== null){
            response.send('We are having troubles') 
        } else{
            response.send(counterSave)
        }
        
        
    })
    
})


router.delete('/:id', (request, response) => {
    Counter.findByIdAndDelete(request.params.id, (error, counterDeleted) =>{
        if (error !== null) {
            response.status(500).send(error)
        } else {
            response.status(204).send(counterDeleted)
        }
    })
})



module.exports = router