// Controladores para actualizar cada uno de los datos de los productos.

const mysql2 = require('mysql2');
const database = require('../config/database.js');

const actualizarNombre = (req, res) => {

    const { idProducto } = req.params;
    const { nombreProducto } = req.body;

    const actualizarConsulta = `UPDATE producto SET nombreProducto = ? WHERE idProducto = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [nombreProducto, idProducto]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Producto actualizado correctamente.'});
      } else {
        res.status(404).json({ message : 'Producto no registrado'});
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarDescripcion = (req, res) => {

    const { idProducto } = req.params;
    const { descripcion } = req.body;

    const actualizarConsulta = `UPDATE producto SET descripcion = ? WHERE idProducto = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [descripcion, idProducto]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Producto actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Producto no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarPrecio = (req, res) => {

    const { idProducto } = req.params;
    const { precio } = req.body;

    const actualizarConsulta = `UPDATE producto SET precio = ? WHERE idProducto = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [precio, idProducto]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Producto actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Producto no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarExistencias = (req, res) => {

    const { idProducto } = req.params;
    const { existencias } = req.body;

    const actualizarConsulta = `UPDATE producto SET existencias = ? WHERE idProducto = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [existencias, idProducto]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Producto actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Producto no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarCategoria = (req, res) => {

    const { idProducto } = req.params;
    const { categoria } = req.body;

    const actualizarConsulta = `UPDATE producto SET categoria = ? WHERE idProducto = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [categoria, idProducto]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Producto actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Producto no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarReferencia = (req, res) => {

    const { idProducto } = req.params;
    const { referencia } = req.body;

    const actualizarConsulta = `UPDATE producto SET referencia = ? WHERE idProducto = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [referencia, idProducto]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Producto actualizado correctamente.'})
      } else {
        res.status(404).json({ message : 'Producto no registrado'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


module.exports = {
    actualizarNombre,
    actualizarDescripcion,
    actualizarPrecio,
    actualizarExistencias,
    actualizarCategoria,
    actualizarReferencia
}