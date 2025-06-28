// Controladores para actualizar cada uno de los datos de los clientes.

const mysql2 = require('mysql2');
const database = require('../config/database.js');

const actualizarRazonSocial = (req, res) => {

  const { nit } = req.params;
  const { razonSocial } = req.body;

  const actualizarConsulta = `UPDATE cliente SET razonSocial = ? WHERE nit = ?;`;
  const consulta = mysql2.format(actualizarConsulta, [razonSocial, nit]);

  try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Cliente actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Cliente no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}

const actualizarCiudad = (req, res) => {

  const { nit } = req.params;
  const { ciudad } = req.body;

  const actualizarConsulta = `UPDATE cliente SET ciudad = ? WHERE nit = ?;`;
  const consulta = mysql2.format(actualizarConsulta, [ciudad, nit]);

  try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Cliente actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Cliente no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}

const actualizarDireccion = (req, res) => {

  const { nit } = req.params;
  const { direccion } = req.body;

  const actualizarConsulta = `UPDATE cliente SET direccion = ? WHERE nit = ?;`;
  const consulta = mysql2.format(actualizarConsulta, [direccion, nit]);

  try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      } 

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Cliente actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Cliente no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}

const actualizarNumTelefonico = (req, res) => {

  const { nit } = req.params;
  const { numTelefonico } = req.body;

  const actualizarConsulta = `UPDATE cliente SET numTelefonico = ? WHERE nit = ?;`;
  const consulta = mysql2.format(actualizarConsulta, [numTelefonico, nit]);

  try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Cliente actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Cliente no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}

const actualizarEmail = (req, res) => {

  const { nit } = req.params;
  const { email } = req.body;

  const actualizarConsulta = `UPDATE cliente SET email = ? WHERE nit = ?;`;
  const consulta = mysql2.format(actualizarConsulta, [email, nit]);

  try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Cliente actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Cliente no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}

const actualizarAdministrador = (req, res) => {

  const { nit } = req.params;
  const { administrador } = req.body;

  const actualizarConsulta = `UPDATE cliente SET administrador = ? WHERE nit = ?;`;
  const consulta = mysql2.format(actualizarConsulta, [administrador, nit]);

  try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Cliente actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Cliente no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}

const actualizarTelAdministrador = (req, res) => {

  const { nit } = req.params;
  const { telAdministrador } = req.body;

  const actualizarConsulta = `UPDATE cliente SET telAdministrador = ? WHERE nit = ?;`;
  const consulta = mysql2.format(actualizarConsulta, [telAdministrador, nit]);

  try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Cliente actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Cliente no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}

const actualizarEmailAdministrador = (req, res) => {

  const { nit } = req.params;
  const { emailAdministrador } = req.body;

  const actualizarConsulta = `UPDATE cliente SET emailAdministrador = ? WHERE nit = ?;`;
  const consulta = mysql2.format(actualizarConsulta, [emailAdministrador, nit]);

  try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Cliente actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Cliente no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}

const actualizarSector = (req, res) => {

  const { nit } = req.params;
  const { sector } = req.body;

  const actualizarConsulta = `UPDATE cliente SET sector = ? WHERE nit = ?;`;
  const consulta = mysql2.format(actualizarConsulta, [sector, nit]);

  try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Cliente actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Cliente no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}

const actualizarActividad = (req, res) => {

  const { nit } = req.params;
  const { actividad } = req.body;

  const actualizarConsulta = `UPDATE cliente SET actividad = ? WHERE nit = ?;`;
  const consulta = mysql2.format(actualizarConsulta, [actividad, nit]);

  try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Cliente actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Cliente no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}

const actualizarTamagno = (req, res) => {

  const { nit } = req.params;
  const { tamagno } = req.body;

  const actualizarConsulta = `UPDATE cliente SET tamagno = ? WHERE nit = ?;`;
  const consulta = mysql2.format(actualizarConsulta, [tamagno, nit]);

  try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Cliente actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Cliente no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}

const actualizarNumEmpleados = (req, res) => {

  const { nit } = req.params;
  const { numEmpleados } = req.body;

  const actualizarConsulta = `UPDATE cliente SET numEmpleados = ? WHERE nit = ?;`;
  const consulta = mysql2.format(actualizarConsulta, [numEmpleados, nit]);

  try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Cliente actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Cliente no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}

const actualizarProducto = (req, res) => {

  const { nit } = req.params;
  const { producto } = req.body;

  const actualizarConsulta = `UPDATE cliente SET producto = ? WHERE nit = ?;`;
  const consulta = mysql2.format(actualizarConsulta, [producto, nit]);

  try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Cliente actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Cliente no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}

const actualizarPeriodoPago = (req, res) => {

  const { nit } = req.params;
  const { periodoPago } = req.body;

  const actualizarConsulta = `UPDATE cliente SET periodoPago = ? WHERE nit = ?;`;
  const consulta = mysql2.format(actualizarConsulta, [periodoPago, nit]);

  try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Cliente actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Cliente no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = {
  actualizarRazonSocial,
  actualizarCiudad,
  actualizarDireccion,
  actualizarNumTelefonico,
  actualizarEmail,
  actualizarAdministrador,
  actualizarTelAdministrador,
  actualizarEmailAdministrador,
  actualizarSector,
  actualizarActividad,
  actualizarTamagno,
  actualizarNumEmpleados,
  actualizarProducto,
  actualizarPeriodoPago
}