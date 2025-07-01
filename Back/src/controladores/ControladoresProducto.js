// Controladores para el CRUD de producto.

const mysql2 = require('mysql2');
const database = require('../config/database.js');

const crearProducto = (req, res) => {
    const { idProducto, nombreProducto, descripcion, precio, existencias, categoria, referencia } = req.body;

    const crearConsulta = `INSERT INTO producto (idProducto, nombreProducto, descripcion, precio, existencias, categoria, 
                          referencia) VALUES (?, ?, ?, ?, ?, ?, ?);`;

    const consulta = mysql2.format(crearConsulta, [idProducto, nombreProducto, descripcion, precio, existencias, categoria, referencia]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
        res.status(400).json({ message : 'Producto ya existe' });
      } else {
        res.status(201).json({ message : 'Producto creado correctamente.' });
      } 
    })
  }  catch (err) {
    res.status(500).send(err.message);
  }
}


const leerProducto = (req, res) => {
  const { idProducto } = req.params;

  const leerConsulta = `SELECT * FROM producto WHERE idProducto = ?;`;

  const consulta = mysql2.format(leerConsulta, [idProducto]);

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


const eliminarProducto = (req, res) => {
  const { idProducto } = req.params;

  const eliminarConsulta = `DELETE FROM producto WHERE idProducto = ?;`;

  const consulta = mysql2.format(eliminarConsulta, [idProducto]);

  try {
    database.query(consulta, (err, result) => {

      if (err) {
        res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Producto eliminado correctamente.'})
      } else {
        res.status(404).json({ message : 'Producto no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


module.exports = {
  crearProducto,
  leerProducto,
  eliminarProducto
}