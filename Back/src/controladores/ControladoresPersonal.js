// Controladores para el CRUD de personal.

const mysql2 = require('mysql2');
const database = require('../config/database.js');

const crearEmpleado = (req, res) => {
  const { numIdentificacion, nombres, apellidos, fechaNacimiento, direccion, numtelefonico, numcelular, email, contacto, numContacto,
          cargo, fechaIngreso, status, contrasegna } = req.body;

  const crearConsulta = `INSERT INTO empleado(numIdentificacion, nombres, apellidos, fechaNacimiento, direccion, numtelefonico, numcelular,
                          email, contacto, numContacto, cargo, fechaIngreso, status, contrasegna) 
                          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

  const consulta = mysql2.format(crearConsulta, [numIdentificacion, nombres, apellidos, fechaNacimiento, direccion, numtelefonico,
                     numcelular, email, contacto, numContacto, cargo, fechaIngreso, status, contrasegna]);

  try {
    database.query(consulta, (err, result) => {

      if (err) {
        res.status(400).json({ message : 'Empleado ya existe' });
      } else {
        res.status(201).json({ message : 'Empleado creado correctamente.' });
      } 
    })
  }  catch (err) {
    res.status(500).send(err.message);
  }
}


const leerEmpleado = (req, res) => {
  const { numIdentificacion } = req.params;

  const leerConsulta = `SELECT * FROM empleado WHERE numIdentificacion = ?;`;

  const consulta = mysql2.format(leerConsulta, [numIdentificacion]);

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


const eliminarEmpleado = (req, res) => {
  const { numIdentificacion } = req.params;

  const eliminarConsulta = `DELETE FROM empleado WHERE numIdentificacion = ?;`;

  const consulta = mysql2.format(eliminarConsulta, [numIdentificacion]);

  try {
    database.query(consulta, (err, result) => {

      if (err) {
        res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Empleado eliminado correctamente.'})
      } else {
        res.status(404).json({ message : 'Empleado no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = {
  crearEmpleado,
  leerEmpleado,
  eliminarEmpleado
}