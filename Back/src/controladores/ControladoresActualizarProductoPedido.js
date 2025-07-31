// Controladores para actualizar los datos de los productos del pedido.

const mysql2 = require('mysql2');
const database = require('../config/database.js');


const actualizarNombreProducto = (req, res) => {

    const { idPedido } = req.params;
    const { idProducto, nombreProducto } = req.body;

    const actualizarConsulta = `UPDATE productospedido SET nombreProducto = ? WHERE idPedido = ? AND idProducto = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [nombreProducto, idPedido, idProducto]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Nombre actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Pedido y/o producto no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarCantidadProducto = (req, res) => {

    const { idPedido } = req.params;
    const { idProducto, cantidad } = req.body;

    const actualizarConsulta = `UPDATE productospedido SET cantidad = ? WHERE idPedido = ? AND idProducto = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [cantidad, idPedido, idProducto]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Cantidad actualizada correctamente.'})
      } else {
        res.status(404).json({ message : 'Pedido y/o producto no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarPrecioUnitario = (req, res) => {

    const { idPedido } = req.params;
    const { idProducto, precioUnitario } = req.body;

    const actualizarConsulta = `UPDATE productospedido SET precioUnitario = ? WHERE idPedido = ? AND idProducto = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [precioUnitario, idPedido, idProducto]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Precio actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Pedido y/o producto no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const eliminarProductoPedido = (req, res) => {

  const { idPedido } = req.params;
  const { idProducto } = req.body;

  const eliminarConsulta = `DELETE FROM productospedido WHERE idPedido = ? AND idProducto = ?;`;
  const consulta = mysql2.format(eliminarConsulta, [idPedido, idProducto]);

  try {
    database.query(consulta, (err, result) => {

      if (err) {
        res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Producto eliminado correctamente.'})
      } else {
        res.status(404).json({ message : 'Pedido y/o producto no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


module.exports = {
    actualizarNombreProducto,
    actualizarCantidadProducto,
    actualizarPrecioUnitario,
    eliminarProductoPedido
 }