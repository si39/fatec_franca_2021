const express = require('express');
const router = express.Router();

const CidadeControllers = require('../controllers/CidadeControllers.js');

router.get('/cidade', CidadeControllers.index);
router.post('/cidade', CidadeControllers.store);
router.put('/cidade/:codigo', CidadeControllers.update);
router.delete('/cidade/:codigo', CidadeControllers.delete);


module.exports = router;

