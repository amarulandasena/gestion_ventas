// Controladores para actualizar cada uno de los datos de los empleados.

const mysql2 = require('mysql2');
const database = require('../config/database.js');

const actualizarNombres = (req, res) => {

    const { numIdentificacion } = req.params;
    const { nombres } = req.body;

    const actualizarConsulta = `UPDATE empleado SET nombres = ? WHERE numIdentificacion = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [nombres, numIdentificacion]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Empleado actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Empleado no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarApellidos = (req, res) => {

    const { numIdentificacion } = req.params;
    const { apellidos } = req.body;

    const actualizarConsulta = `UPDATE empleado SET apellidos = ? WHERE numIdentificacion = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [apellidos, numIdentificacion]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Empleado actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Empleado no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarFechaNacimiento = (req, res) => {

    const { numIdentificacion } = req.params;
    const { fechaNacimiento } = req.body;

    const actualizarConsulta = `UPDATE empleado SET fechaNacimiento = ? WHERE numIdentificacion = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [fechaNacimiento, numIdentificacion]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Empleado actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Empleado no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarDireccion = (req, res) => {

    const { numIdentificacion } = req.params;
    const { direccion } = req.body;

    const actualizarConsulta = `UPDATE empleado SET direccion = ? WHERE numIdentificacion = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [direccion, numIdentificacion]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Empleado actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Empleado no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarNumeroTelefonico = (req, res) => {

    const { numIdentificacion } = req.params;
    const { numtelefonico } = req.body;

    const actualizarConsulta = `UPDATE empleado SET numtelefonico = ? WHERE numIdentificacion = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [numtelefonico, numIdentificacion]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Empleado actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Empleado no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}



const actualizarNumeroCelular = (req, res) => {

    const { numIdentificacion } = req.params;
    const { numcelular } = req.body;

    const actualizarConsulta = `UPDATE empleado SET numcelular = ? WHERE numIdentificacion = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [numcelular, numIdentificacion]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Empleado actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Empleado no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarEmail = (req, res) => {

    const { numIdentificacion } = req.params;
    const { email } = req.body;

    const actualizarConsulta = `UPDATE empleado SET email = ? WHERE numIdentificacion = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [email, numIdentificacion]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Empleado actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Empleado no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarContacto = (req, res) => {

    const { numIdentificacion } = req.params;
    const { contacto } = req.body;

    const actualizarConsulta = `UPDATE empleado SET contacto = ? WHERE numIdentificacion = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [contacto, numIdentificacion]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Empleado actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Empleado no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarNumContacto = (req, res) => {

    const { numIdentificacion } = req.params;
    const { numContacto } = req.body;

    const actualizarConsulta = `UPDATE empleado SET numContacto = ? WHERE numIdentificacion = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [numContacto, numIdentificacion]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Empleado actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Empleado no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarCargo = (req, res) => {

    const { numIdentificacion } = req.params;
    const { cargo } = req.body;

    const actualizarConsulta = `UPDATE empleado SET cargo = ? WHERE numIdentificacion = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [cargo, numIdentificacion]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Empleado actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Empleado no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarFechaIngreso = (req, res) => {

    const { numIdentificacion } = req.params;
    const { fechaIngreso } = req.body;

    const actualizarConsulta = `UPDATE empleado SET fechaIngreso = ? WHERE numIdentificacion = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [fechaIngreso, numIdentificacion]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Empleado actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Empleado no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarStatus = (req, res) => {

    const { numIdentificacion } = req.params;
    const { status } = req.body;

    const actualizarConsulta = `UPDATE empleado SET status = ? WHERE numIdentificacion = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [status, numIdentificacion]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Empleado actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Empleado no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarContrasegna = (req, res) => {

    const { numIdentificacion } = req.params;
    const { contrasegna } = req.body;

    const actualizarConsulta = `UPDATE empleado SET contrasegna = ? WHERE numIdentificacion = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [contrasegna, numIdentificacion]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Empleado actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Empleado no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


module.exports = {
    actualizarNombres,
    actualizarApellidos,
    actualizarFechaNacimiento,
    actualizarDireccion,
    actualizarNumeroTelefonico,
    actualizarNumeroCelular,
    actualizarEmail,
    actualizarContacto,
    actualizarNumContacto,
    actualizarCargo,
    actualizarFechaIngreso,
    actualizarStatus,
    actualizarContrasegna
}

