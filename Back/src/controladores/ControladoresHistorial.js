// Controladores para el CRUd del historial de pagos.

const mysql2 = require('mysql2');
const database = require('../config/database.js');

const crearHistorial = (req, res) => {
    const { nit1, historial } = req.body;

    const crearConsulta = `INSERT INTO historial (nit1, historial) VALUES (?, ?);`;

    const consulta = mysql2.format(crearConsulta, [nit1, historial]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
        res.status(400).json({ message : 'Error, pago ingresado de manera incorrecta.' });
      } else {
        res.status(201).json({ message : 'Pago ingresado correctamente.' });
      } 
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = {
    crearHistorial
}