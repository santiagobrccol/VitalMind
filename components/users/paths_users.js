const express = require('express');
const router = express.Router();
const User = require('./model_users')
const {createJwtToken} = require('../../assets/tokens')
//const multer = require('multer')
//const middlePublic = multer({dest: 'public/'})

/**
 * Path to query all Users 
 * GET /users
 * @return Array
 */

router.get('/', (request, response) =>{
    User.find((error, users) =>{
        if (error !== null) {
            response.status(500).send('something went wrong')
        } else {
            response.send(users)
        }
    })
    
})

/**
 * Path to query  a user by the ID
 * GET /users/:id
 * @return Object User query
 */

router.get('/:id', (request, response ) =>{
    User.findById(request.params.id, /**PROYECCION*/ (error, user) =>{
        if (error !== null) {
            response.status(500).send(error)
        } else {
            response.send(user)
        }
    })
})

/**
 * Path to create a New User
 * POST /Users
 * @return Object New User
 */

router.post('/', (request, response) => {
    const newUser = new User(request.body)
    newUser.save((error, userRegister) =>{
        if (error !== null) {
            response.status(422).send(error)
        } else {
            let user = userRegister.toObject()
            delete user.pasword
            response.status(201).send(user)
        }
    })

})

/**
 * Path to update the  user info 
 * PUT /User/:id
 * @return Object User updated
 */
router.put('/:id', (request, response ) => {
    console.log('request.body', request.body)
    User.updateOne({ _id: request.params.id }, request.body, (error, userUpdated) =>{
        if (error !== null) {
            response.status(422).send(error)
        } else {
            response.send(userUpdated)
        }
    })

})

/**
 * Path to delete/eliminate a Usre from the Data Base
 * Delte /users/:id
 * @return Object User deleted
 */

router.delete('/:id', (request, response) => {
    User.findByIdAndDelete(request.params.id, (error, userDeleted) =>{
        if (error !== null) {
            response.status(500).send(error)
        } else {
            response.status(204).send(userDeleted)
        }
    })
})

router.post('/authentication', (request, response) => {
    User.findOne({
        email: request.body.email,
        password: request.body.password
    }, (error, user) =>{
        if (error) {
            response.status(500).send(error)
        } else if (user) {
            const token = createJwtToken(user)
            response.send({jwt: token})
        } else {
            response.status(401).send({error: 'Email or passwor invalid'})
        }
    })
})

module.exports = router


/** 
/**
 * Ruta para la autenticación de un cliente
 * PUT /clientes/autenticacion
 * @return Object Retorna un JSON Web Token

enrutador.post('/autenticacion', (solicitud, respuesta) => {

Cliente.findOne({
    correoElectronico: solicitud.body.correoElectronico,
    contrasena: solicitud.body.contrasena
}, (error, cliente) => {
    if (error) {
    respuesta.status(500).send(error)
    } else if (cliente) { // Si el cliente es encontrado, deberíamos devolver la llave
    respuesta.send({ jwt: crearToken(cliente) })
    } else { // Cuando el cliente esta vacio, es decir, cuando no se encontró
    respuesta.status(401).send({ error: 'El correo o contraseña no son validos' })
    }
})

})
*/