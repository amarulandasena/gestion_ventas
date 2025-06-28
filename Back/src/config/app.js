// Archivo de configuración de Express.

// Importamos los paquetes que necesitamos.
const express = require('express');
const cors = require('cors');

const rutaLogin = require('../rutas/RutaLogin.js');
const rutaClientes = require('../rutas/RutasClientes.js');
const rutaActualizarClientes = require('../rutas/RutasActualizarClientes.js');

// Instanciamos el servidor.
const app = express();

// Damos formato JSON a la ifnromación que recibimos del servidor.
app.use(express.json());
app.use(express.urlencoded( { extended: true}));
app.use(cors());

// Creamos los endpoint.
app.use('/login', rutaLogin);
app.use('/cliente', rutaClientes);
app.use('/actualizarClientes', rutaActualizarClientes);

// Exportamos la app.
module.exports = app;

