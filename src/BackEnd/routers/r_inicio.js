const router = require('express').Router();

const { table1 } = require('../db');

router.get('/', async (req, res) => {
    const resul = await table1.findAll();
    res.json(resul);
})

module.exports = router;