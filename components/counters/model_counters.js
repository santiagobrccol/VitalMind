const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
    date: Date,
    descriptionEvent: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false}
});

const Counter = mongoose.model('counters', counterSchema);

module.exports = Counter

/** 
// creacion de un registro a la vez 
const counter = new Counter({ 
    date: (2020, 03, 03),
    descirptionEvent: 'click on button',
    userId: Object 
});

counter.save((error, counterSave) =>{
    console.log('Error', error)
    console.log('counterSave', counterSave)
})
*/

/**Arreglo para guardar varios registros al mismo tiempo 
const arrayCounter = [{ 
    date: (2020, 03, 24),
    descirptionEvent: 'click on button',
    userId: Object 
},
{ 
    date: (2020, 10, 03),
    descirptionEvent: 'click on button',
    userId: Object 
}
]
Counter.insertMany(arrayCounter, (error, counterRegister) =>{
    console.log('Error', error)
    console.log('counterRegister', counterRegister)

})
*/