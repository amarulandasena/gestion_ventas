// Controladores para el CRUD  de clientes.

const mysql2 = require('mysql2');
const database = require('../config/database.js');

const crearCliente = (req, res) => {
  const { nit, razonSocial, ciudad, direccion, numTelefonico, email, administrador, telAdministrador, emailAdministrador, sector, 
          actividad, tamagno, numEmpleados, producto, periodoPago } = req.body;

  const crearConsulta = `INSERT INTO cliente(nit, razonSocial, ciudad, direccion, numTelefonico, email, administrador, telAdministrador, 
                         emailAdministrador, sector, actividad, tamagno, numEmpleados, producto, periodoPago)
                         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

  const consulta = mysql2.format(crearConsulta, [nit, razonSocial, ciudad, direccion, numTelefonico, email, 
                  administrador, telAdministrador, emailAdministrador, sector, actividad, tamagno, numEmpleados, producto, periodoPago]);

  try {
    database.query(consulta, (err, result) => {

      if (err) {
        res.status(400).json({ message : 'Cliente ya existe' });
      } else {
        res.status(201).json({ message : 'Cliente creado correctamente.' });
      } 
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const leerCliente = (req, res) => {
  const { nit } = req.params;

  const crearConsulta = `SELECT * FROM cliente WHERE nit = ?;`;

  const consulta = mysql2.format(crearConsulta, [nit]);

  try {
    database.query(consulta, (err, result) => {
      
      if (err) {
        res.status(400).send(err);
      } 
      if (result[0] !== undefined){
          res.status(200).json(result[0]);
        } else {
          res.json({noEncontrado : true})
        }
      
    })
  } catch (err){
    res.status(500).send(err.message);
  }
}


const eliminarCliente = (req, res) => {
  const { nit } = req.params;

  const eliminarConsulta = `DELETE FROM cliente WHERE nit = ?;`;
  const consulta = mysql2.format(eliminarConsulta, [nit]);

  try {
    database.query(consulta, (err, result) => {

      if (err) {
        res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Cliente eliminado correctamente.'})
      } else {
        res.status(404).json({ message : 'Cliente no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = {
  crearCliente,
  leerCliente,
  eliminarCliente
}