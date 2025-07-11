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


const actualizarHistorial = (req, res) => {
  
  const { idPago } = req.params;
  const { historial } = req.body;

  const actualizarConsulta = `UPDATE historial SET historial = ? WHERE idPago = ?;`;
  const consulta = mysql2.format(actualizarConsulta, [historial, idPago]);

  try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Historial actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Pago no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const leerHistorial = (req, res) => {
  
  const { nit1 } = req.params;
  
  const leerConsulta = `SELECT idPago, historial FROM historial WHERE nit1 = ?;`;
  const consulta = mysql2.format(leerConsulta, [nit1]);

  try {
    database.query(consulta, (err, result) => {
      
      if (err) {
        res.status(400).send(err);
      } 
      if (result.length !== 0){
          res.status(200).json(result);
        } else {
          res.json({noEncontrado : true})
        }
      
    })
  } catch (err){
    res.status(500).send(err.message);
  }
}

module.exports = {
    crearHistorial,
    actualizarHistorial,
    leerHistorial
}