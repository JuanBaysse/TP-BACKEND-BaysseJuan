const express = require('express');
const router = express.Router();
const transaccionCtrl = require('../controllers/transaccion.controller');

// Definimos las rutas para la gestión de transacciones
router.get('/', transaccionCtrl.getAllTransacciones);
router.post('/', transaccionCtrl.createTransaccion);
router.get('/cliente', transaccionCtrl.getTransaccionesByCliente);
router.get('/divisas', transaccionCtrl.getTransaccionesByDivisas);

module.exports = router;
