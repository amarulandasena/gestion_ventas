// Archivo de configuración de Express.

// Importamos los paquetes que necesitamos.
const express = require('express');
const cors = require('cors');

// Instanciamos el servidor.
const app = express();

// Damos formato JSON a la ifnromación que recibimos del servidor.
app.use(express.json());
app.use(express.urlencoded( { extended: true}));
app.use(cors());

// Exportamos la app.
module.exports = app;

