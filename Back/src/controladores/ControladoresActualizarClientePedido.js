// Controladores para actualizar los datos del cliente que hace el pedido.

const mysql2 = require('mysql2');
const database = require('../config/database.js');

const actualizarNit = (req, res) => {

    const { idPedido } = req.params;
    const { nit } = req.body;

    const actualizarConsulta = `UPDATE pedido SET nit = ? WHERE idPedido = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [nit, idPedido]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Nit actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Pedido no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarNumeroId = (req, res) => {

    const { idPedido } = req.params;
    const { numIdentificacion } = req.body;

    const actualizarConsulta = `UPDATE pedido SET numIdentificacion = ? WHERE idPedido = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [numIdentificacion, idPedido]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Número de identificación actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Pedido no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarFechaPedido = (req, res) => {

    const { idPedido } = req.params;
    const { fechaPedido } = req.body;

    const actualizarConsulta = `UPDATE pedido SET fechaPedido = ? WHERE idPedido = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [fechaPedido, idPedido]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Fecha actualizada correctamente.'})
      } else {
        res.status(404).json({ message : 'Pedido no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarDireccion = (req, res) => {

    const { idPedido } = req.params;
    const { direccionEnvio } = req.body;

    const actualizarConsulta = `UPDATE pedido SET direccionEnvio = ? WHERE idPedido = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [direccionEnvio, idPedido]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Dirección actualizada correctamente.'})
      } else {
        res.status(404).json({ message : 'Pedido no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarFormaPago = (req, res) => {

    const { idPedido } = req.params;
    const { formaPago } = req.body;

    const actualizarConsulta = `UPDATE pedido SET formaPago = ? WHERE idPedido = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [formaPago, idPedido]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Forma de pago actualizada correctamente.'})
      } else {
        res.status(404).json({ message : 'Pedido no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarEstado = (req, res) => {

    const { idPedido } = req.params;
    const { estado } = req.body;

    const actualizarConsulta = `UPDATE pedido SET estado = ? WHERE idPedido = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [estado, idPedido]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Estado actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Pedido no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarFechaEntrega = (req, res) => {

    const { idPedido } = req.params;
    const { fechaEntrega } = req.body;

    const actualizarConsulta = `UPDATE pedido SET fechaEntrega = ? WHERE idPedido = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [fechaEntrega, idPedido]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Fecha de entrega actualizada correctamente.'})
      } else {
        res.status(404).json({ message : 'Pedido no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarComentarios = (req, res) => {

    const { idPedido } = req.params;
    const { comentarios } = req.body;

    const actualizarConsulta = `UPDATE pedido SET comentarios = ? WHERE idPedido = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [comentarios, idPedido]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Comentarios actualizados correctamente.'})
      } else {
        res.status(404).json({ message : 'Pedido no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = { 
    actualizarNit,
    actualizarNumeroId,
    actualizarFechaPedido,
    actualizarDireccion,
    actualizarFormaPago,
    actualizarEstado,
    actualizarFechaEntrega,
    actualizarComentarios
}