require('dotenv').config();
const express = require('express');
const articuloController = require('./controllers/articulosController');
const boletaController = require('./controllers/boletaController');
const clienteController = require('./controllers/clienteController')
const personalController = require('./controllers/personalController');

const app = express();
app.use(express.json());

app.use('/api/articulo', articuloController);
app.use('/api/boleta', boletaController);
app.use('/api/cliente', clienteController);
app.use('/api/personal', personalController);

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en port ${PORT}`)
});
