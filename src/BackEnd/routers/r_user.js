const router = require('express').Router();

const { table4 } = require('../db');

router.get('/', async (req, res) => {
    const resul = await table4.findAll();
    res.json(resul);
})

router.post('/', async (req, res) => {
    const resul = await table4.create(req.body);
    res.json(resul);
});

router.put('/:Id', async (req, res) => {
    await table4.update(req.body, {
        where: { id: req.params.Id }
    });
    res.json({ success: 'Registro actualizado'});
});

router.delete('/:Id', async (req, res) => {
    await table4.destroy({
        where: { id: req.params.Id }
    });
    res.json({ success: 'Registro eliminado'});
});


module.exports = router;