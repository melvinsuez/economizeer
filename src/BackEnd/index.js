const express = require('express');
const bodyParser = require ('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

const routers = require ('./routers');
require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', routers);

app.listen(3000, () => {
    console.log('servidor Iniciado');
});