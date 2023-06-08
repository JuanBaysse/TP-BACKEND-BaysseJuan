const Espectador = require('../models/espectador');

const espectadorCtrl = {};

espectadorCtrl.createEspectador = async (req, res) => {
  const { apellido, nombre, dni, email } = req.body;

  try {
    const espectador = new Espectador({
      apellido,
      nombre,
      dni,
      email,
    });

    await espectador.save();

    res.json({
      status: '1',
      msg: 'Espectador registrado exitosamente.',
      espectador,
    });
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error al procesar la operación.',
    });
  }
};

espectadorCtrl.getAllEspectadores = async (req, res) => {
  try {
    const espectadores = await Espectador.find();
    res.json(espectadores);
  } catch (error) {
    res.status(500).json({
      status: '0',
      msg: 'Error al obtener los espectadores.',
    });
  }
};

espectadorCtrl.getEspectador = async (req, res) => {
  try {
    const espectador = await Espectador.findById(req.params.id);
    res.json(espectador);
  } catch (error) {
    res.status(500).json({
      status: '0',
      msg: 'Error al obtener el espectador.',
    });
  }
};

module.exports = espectadorCtrl;
