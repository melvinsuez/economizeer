const express = require('express');
const bodyParser = require ('body-parser')

const app = express();

const routers = require ('./routers');
require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', routers);

app.listen(3000, () => {
    console.log('servidor arrancado');
});