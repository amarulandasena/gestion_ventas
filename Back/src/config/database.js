// Archivo de confguración de la BBDD.

// Importamos los paquetes que necesitamos.
const mysql2 = require('mysql2');

// Creamos la conexión a la BBDD.
const database = mysql2.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'carolina1998',
    database: 'gestionventas_mipymes'
  }
);

// Exportamos la conexión a la BBDD.
module.exports = database;
