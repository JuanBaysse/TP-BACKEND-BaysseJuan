const Transaccion = require('../models/transaccion');

const transaccionCtrl = {};

transaccionCtrl.getAllTransacciones = async (req, res) => {
  try {
    const transacciones = await Transaccion.find();
    res.json(transacciones);
  } catch (error) {
    res.status(500).json({
      status: '0',
      msg: 'Error al obtener las transacciones'
    });
  }
};

transaccionCtrl.createTransaccion = async (req, res) => {
  const {
    monedaOrigen,
    cantidadOrigen,
    monedaDestino,
    cantidadDestino,
    emailCliente,
    tasaConversion
  } = req.body;

  try {
    const transaccion = new Transaccion({
      monedaOrigen,
      cantidadOrigen,
      monedaDestino,
      cantidadDestino,
      emailCliente,
      tasaConversion
    });

    await transaccion.save();

    res.json({
      status: '1',
      msg: 'Transacción registrada exitosamente.',
      transaccion
    });
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error al procesar la operación.'
    });
  }
};

transaccionCtrl.getTransaccionesByCliente = async (req, res) => {
  const { email } = req.query;

  try {
    const transacciones = await Transaccion.find({ emailCliente: email });
    res.json(transacciones);
} catch (error) {
    res.status(500).json({
      status: '0',
      msg: 'Error al obtener las transacciones del cliente'
    });
  }
};

transaccionCtrl.getTransaccionesByDivisas = async (req, res) => {
  const { monedaOrigen, monedaDestino } = req.query;

  try {
    const transacciones = await Transaccion.find({
      monedaOrigen: monedaOrigen,
      monedaDestino: monedaDestino
    });

    res.json(transacciones);
  } catch (error) {
    res.status(500).json({
      status: '0',
      msg: 'Error al obtener las transacciones por divisas'
    });
  }
};

module.exports = transaccionCtrl;