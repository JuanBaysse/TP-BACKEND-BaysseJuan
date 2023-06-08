const express = require('express');
const router = express.Router();
const espectadorCtrl = require('../controllers/espectador.controller');

// Rutas para la gestión de espectadores
router.post('/', espectadorCtrl.createEspectador);
router.get('/', espectadorCtrl.getAllEspectadores);
router.get('/:id', espectadorCtrl.getEspectador);

module.exports = router;
