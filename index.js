const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const pathsCounter = require('./components/counters/paths_counters');
const pathsUser = require('./components/users/paths_users')
const pathsQuestion = require('./components/questions/paths_questions')
const pathsAnswer = require('./components/answers/paths_answers')
const User = require('./components/users/model_users')
const config = require('./config')

//other way to import heroku
//const {PORT} = require('./config')

require('./data_base');


app.use(cors());
//const token =require('./tokens')
//Middleware to read data in JSON 
app.use(bodyParser.json());

app.use('/counter', pathsCounter);
app.use('/user', pathsUser )
app.use('/question', pathsQuestion)
app.use('/answer', pathsAnswer)

//app.use('/public', express.static('public'))



app.post('/token',  (request, response) => {
    
    User.findOne({email: request.body.email},  (error, userFind) =>{
        if (error !== null) {
            response.status(500).send('something went wrong')
        } else {
            response.send(token.createJwtToken(userFind))
        }
    })
    

})

app.listen(config.PORT, () =>{
    console.log('Server online')
}); 