// Controlador para el ingreso a la aplicación.

const mysql2 = require('mysql2');
const database = require('../config/database');

const leerLogin = (req, res) => {
  const { numIdentificacion, contrasegna } = req.body;

  const crearConsulta = `SELECT * FROM empleado WHERE numIdentificacion = ? AND contrasegna = ?`;
  const consulta = mysql2.format(crearConsulta, [numIdentificacion, contrasegna]);

  try {
    database.query(consulta, 
      (err, result) => {

        if (err) {
          res.status(400).send(err);
        }
        
        if (result[0] !== undefined){
          res.status(200).json(result[0]);
        } else {
          res.json({noEncontrado : true})
        }
      }
    )
  } catch (err) {
    res.status(500).send(err.message);
  }
    
}

module.exports = { leerLogin } ;
