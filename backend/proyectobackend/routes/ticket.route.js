const express = require('express');
const router = express.Router();
const ticketCtrl = require('../controllers/ticket.controller');

// Rutas para la gestión de tickets
router.post('/', ticketCtrl.createTicket);
router.get('/', ticketCtrl.getAllTickets);
router.delete('/:id', ticketCtrl.deleteTicket);
router.put('/:id', ticketCtrl.updateTicket);
router.get('/espectadores/:categoria', ticketCtrl.getEspectadoresByCategoria);
router.get('/:id', ticketCtrl.getTicketById);
module.exports = router;