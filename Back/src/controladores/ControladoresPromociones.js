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


const leerPromocion = (req, res) => {

  const { codigo } = req.params;

  const leerConsulta = `SELECT * FROM promocion WHERE codigo = ?;`;
  const consulta = mysql2.format(leerConsulta, [codigo]);

  try {
    database.query(consulta, (err, result) => {
      
      if (err) {
        res.status(400).send(err);
      } 
      if (result[0] !== undefined){
        res.status(200).json(result[0]);
      } else {
        res.status(404).json({noEncontrado : true})
      }
      
    })
  } catch (err){
    res.status(500).send(err.message);
  }

}


const crearPromocion = (req, res) => {

  const { codigo, numIdentificacion1, descripcion, descuento, fechaInicio, fechaFinal, tipoPromocion } = req.body;

  const crearConsulta = `INSERT INTO promocion (codigo, numIdentificacion1, descripcion, descuento, fechaInicio, fechaFinal, tipoPromocion)
                        VALUES (?, ?, ?, ?, ?, ?, ?);`;
  const consulta = mysql2.format(crearConsulta, [codigo, numIdentificacion1, descripcion, descuento, fechaInicio, fechaFinal, tipoPromocion]);

  try {
    database.query(consulta, (err, result) => {

      if (err) {
        res.status(400).json({ message : 'Promoción ya existe' });
      } else {
        res.status(201).json({ message : 'Promoción creada correctamente.' });
      } 
    })
  } catch (err) {
    res.status(500).send(err.message);
  }

}

module.exports = {
  leerDescuentos,
  leerPromocion,
  crearPromocion
}

