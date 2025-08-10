// Controladores para el CRUD de promociones y consultar los productos con descuento.

const mysql2 = require('mysql2');
const database = require('../config/database.js');

const leerDescuentos = (req, res) => {

  const leerConsulta = `SELECT idProducto, nombreProducto, precio, descuento FROM producto WHERE descuento != 0;`;
  const consulta = mysql2.format(leerConsulta);

  try {
    database.query(consulta, (err, result) => {
    
    if (err) {
        res.status(400).send(err);
    } 
    if (result.length > 0){
        res.status(200).json(result);
        } else {
        res.status(404).json({noEncontrado : true})
        }
    
    })
  } catch (err){
    res.status(500).send(err.message);
  }
}

module.exports = {
  leerDescuentos
}

