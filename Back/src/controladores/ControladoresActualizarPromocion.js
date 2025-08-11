// Controladores para actualizar cada uno de los datos de las promociones.

const mysql2 = require('mysql2');
const database = require('../config/database.js');

const actualizarNumIdentificacion = (req, res) => {

    const { codigo } = req.params;
    const { numIdentificacion1 } = req.body;

    const actualizarConsulta = `UPDATE promocion SET numIdentificacion1 = ? WHERE codigo = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [numIdentificacion1, codigo]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Promoción actualizada correctamente.'})
      } else {
        res.status(404).json({ message : 'Promoción no registrada'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarDescripcion = (req, res) => {

    const { codigo } = req.params;
    const { descripcion } = req.body;

    const actualizarConsulta = `UPDATE promocion SET descripcion = ? WHERE codigo = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [descripcion, codigo]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Promoción actualizada correctamente.'})
      } else {
        res.status(404).json({ message : 'Promoción no registrada'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarDescuento = (req, res) => {

    const { codigo } = req.params;
    const { descuento } = req.body;

    const actualizarConsulta = `UPDATE promocion SET descuento = ? WHERE codigo = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [descuento, codigo]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Promoción actualizada correctamente.'})
      } else {
        res.status(404).json({ message : 'Promoción no registrada'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarFechaInicio = (req, res) => {

    const { codigo } = req.params;
    const { fechaInicio } = req.body;

    const actualizarConsulta = `UPDATE promocion SET fechaInicio = ? WHERE codigo = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [fechaInicio, codigo]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Promoción actualizada correctamente.'})
      } else {
        res.status(404).json({ message : 'Promoción no registrada'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarFechaFinal = (req, res) => {

    const { codigo } = req.params;
    const { fechaFinal } = req.body;

    const actualizarConsulta = `UPDATE promocion SET fechaFinal = ? WHERE codigo = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [fechaFinal, codigo]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Promoción actualizada correctamente.'})
      } else {
        res.status(404).json({ message : 'Promoción no registrada'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


const actualizarTipoPromocion = (req, res) => {

    const { codigo } = req.params;
    const { tipoPromocion } = req.body;

    const actualizarConsulta = `UPDATE promocion SET tipoPromocion = ? WHERE codigo = ?;`;
    const consulta = mysql2.format(actualizarConsulta, [tipoPromocion, codigo]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
         res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        res.status(200).json({ message : 'Promoción actualizada correctamente.'})
      } else {
        res.status(404).json({ message : 'Promoción no registrada'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}


module.exports = {
    actualizarNumIdentificacion,
    actualizarDescripcion,
    actualizarDescuento,
    actualizarFechaInicio,
    actualizarFechaFinal,
    actualizarTipoPromocion
}