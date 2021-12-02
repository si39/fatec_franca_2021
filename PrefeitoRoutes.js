const express = require('express');
const router = express.Router();

const PrefeitoControllers = require('../controllers/PrefeitoControllers.js');

router.get('/', (req, res) => {
    return res.json('Rota rais encontrada');
})

router.get('/prefeito', PrefeitoControllers.index);
router.post('/prefeito', PrefeitoControllers.store);
router.put('/prefeito/:codigo', PrefeitoControllers.update);
router.delete('/prefeito/:codigo', PrefeitoControllers.delete);



module.exports = router;

