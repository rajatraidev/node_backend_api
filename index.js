// Including Libraries and Modules
const express = require('express');
const port = 7000;
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
const app = express();
// Body Parser JSON
app.use(bodyParser.json());

// Routes
app.use('/', require('./routes'));

// creating server
app.listen(port, function(err){
    if(err){
        console.log(`Error in ${err}`);
    }
    console.log('Server is running visit http://localhost:7000 to see result');
});