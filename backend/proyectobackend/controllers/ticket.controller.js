const Ticket = require('../models/ticket');

const ticketCtrl = {};

ticketCtrl.createTicket = async (req, res) => {
  const { precioTicket, categoriaEspectador, fechaCompra, espectador } = req.body;

  try {
    const ticket = new Ticket({
      precioTicket,
      categoriaEspectador,
      fechaCompra,
      espectador,
    });

    await ticket.save();

    res.json({
      status: '1',
      msg: 'Ticket registrado exitosamente.',
      ticket,
    });
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error al procesar la operación.',
    });
  }
};

ticketCtrl.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().populate('espectador');
    res.json(tickets);
  } catch (error) {
    res.status(500).json({
      status: '0',
      msg: 'Error al obtener los tickets.',
    });
  }
};

ticketCtrl.deleteTicket = async (req, res) => {
  try {
    await Ticket.findByIdAndDelete(req.params.id);
    res.json({
      status: '1',
      msg: 'Ticket eliminado exitosamente.',
    });
  } catch (error) {
    res.status(500).json({
      status: '0',
      msg: 'Error al eliminar el ticket.',
    });
  }
};

ticketCtrl.updateTicket = async (req, res) => {
  const { precioTicket, categoriaEspectador, fechaCompra, espectador } = req.body;

  try {
    await Ticket.findByIdAndUpdate(req.params.id, {
      precioTicket,
      categoriaEspectador,
      fechaCompra,
      espectador,
    });

    res.json({
      status: '1',
      msg: 'Ticket actualizado exitosamente.',
    });
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error al procesar la operación.',
    });
  }
};

ticketCtrl.getEspectadoresByCategoria = async (req, res) => {
  const { categoria } = req.params;

  try {
    const espectadores = await Ticket.find({ categoriaEspectador: categoria }).populate('espectador');
    res.json(espectadores);
  } catch (error) {
    res.status(500).json({
      status: '0',
      msg: 'Error al obtener los espectadores por categoría.',
    });
  }
};

ticketCtrl.getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id).populate('espectador');
    if (!ticket) {
      return res.status(404).json({
        status: '0',
        msg: 'Ticket no encontrado.',
      });
    }
    res.json(ticket);
  } catch (error) {
    res.status(500).json({
      status: '0',
      msg: 'Error al obtener el ticket.',
    });
  }
};
module.exports = ticketCtrl;
