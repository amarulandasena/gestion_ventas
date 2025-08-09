// Controladores para la consulta de los precios.

const mysql2 = require('mysql2');
const database = require('../config/database.js');

const leerPrecios = (req, res) => {

  const { nombreProducto } = req.params;

  const leerConsulta = `SELECT idProducto, nombreProducto, precio FROM producto WHERE nombreProducto LIKE ?;`;
  const consulta = mysql2.format(leerConsulta, [`%${nombreProducto}%`]);

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


const leerPrecio = (req, res) => {

  const { idProducto } = req.params;

  const leerConsulta = `SELECT nombreProducto, precio FROM producto WHERE idProducto = ?;`;
  const consulta = mysql2.format(leerConsulta, [idProducto]);

  try {
    database.query(consulta, (err, result) => {
      
      if (err) {
        res.status(400).send(err);
      } 
      if (result[0] !== undefined){
          res.status(200).json(result[0]);
      } else {
        res.json({noEncontrado : true});
      }
      
    })
  } catch (err){
    res.status(500).send(err.message);
  }
}


module.exports = {
  leerPrecios,
  leerPrecio 
}