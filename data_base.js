const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/counter', {useNewUrlParser: true, useUnifiedTopology: true});

// "connection" help us to know if the connection was succseful or not 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log ("we're connected!")
});