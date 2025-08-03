const mysql2 = require('mysql2');
const database = require('../config/database.js');

const agregarProducto = (req, res) => {
    const { idPedido, idProducto, nombreProducto, cantidad, precioUnitario } = req.body;

    const crearConsulta = `INSERT INTO productospedido(idPedido, idProducto, nombreProducto, cantidad, precioUnitario)
                           VALUES (?, ?, ?, ?, ?);`;

    const consulta = mysql2.format(crearConsulta, [idPedido, idProducto, nombreProducto, cantidad, precioUnitario]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
        res.status(400).json({noEncontrado: true, message : 'El código del pedido o producto es incorrecto.' });
      } else {
        res.status(201).json({noEncontrado: false, message : 'Producto agregado correctamente.' });
      } 
    })
    } catch (err) {
    res.status(500).send(err.message);
    }
}


const leerProductosPedido = (req, res) => {

  const { idPedido } = req.params;

  const leerConsulta = `SELECT * FROM productospedido WHERE idPedido = ?;`;
  const consulta = mysql2.format(leerConsulta, [idPedido]);

  try {
    database.query(consulta, (err, result) => {
      
      if (err) {
        res.status(400).send(err);
      } 
      if (result.length !== 0){
          res.status(200).json(result);
        } else {
          res.status(404).json({noEncontrado : true})
        }
      
    })
  } catch (err){
    res.status(500).send(err.message);
  }
}


const eliminarProductosPedido = (req, res) => {
 
  const { idPedido } = req.params;

  const eliminarConsulta = `DELETE FROM productospedido WHERE idPedido = ?;`;
  const consulta = mysql2.format(eliminarConsulta, [idPedido]);

  try {
    database.query(consulta, (err, result) => {

      if (err) {
        res.status(400).send(err);
      }

      if (result.affectedRows > 0){
        res.status(404).json({ message : 'Valide la información del pedido.'})
      } else {
        res.status(200).json({ message : 'Pedido eliminado correctamente.'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


module.exports = {
  agregarProducto,
  leerProductosPedido,
  eliminarProductosPedido
}