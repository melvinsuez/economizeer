const router = require('express').Router();

const { table3 } = require('../db');

router.get('/', async (req, res) => {
    const resul = await table3.findAll();
    res.json(resul);
})

router.post('/', async (req, res) => {
    const resul = await table3.create(req.body);
    res.json(resul);
});

router.put('/:Id', async (req, res) => {
    await table3.update(req.body, {
        where: { id: req.params.Id }
    });
    res.json({ success: 'Registro actualizado'});
});

router.delete('/:Id', async (req, res) => {
    await table3.destroy({
        where: { id: req.params.Id }
    });
    res.json({ success: 'Registro eliminado'});
});

module.exports = router;