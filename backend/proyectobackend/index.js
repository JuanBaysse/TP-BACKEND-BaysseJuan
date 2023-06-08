const express = require('express');
const cors = require('cors');
const {mongoose} = require('./database');
var app = express();
//middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
//Cargamos el modulo de direccionamiento de rutas
const productRoutes = require('./routes/product.route');
app.use('/api/transacciones', require('./routes/transaccion.route'));
app.use('/api/espectadores', require('./routes/espectador.route'));
//app.use('/api/agente', require('./routes/agente.route.js'));
//app.use('/api/sector', require('./routes/sector.route'));
app.use('/api/tickets', require('./routes/ticket.route'));
app.use('/api/product', productRoutes);
//setting
app.set('port', process.env.PORT || 3000);
//starting the server
app.listen(app.get('port'), () => {
console.log(`Servicio iniciado en puerto`, app.get('port'));
});