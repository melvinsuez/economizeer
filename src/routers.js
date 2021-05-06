const routers = require('express').Router();

const { table1 } = require('./db');

routers.get('/', async (req, res) => {
    const result = await table1.findAll();
    res.json(result);
})


module.exports = routers;