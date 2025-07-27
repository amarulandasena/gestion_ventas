// Controladores para el CRUD de pedido.

const mysql2 = require('mysql2');
const database = require('../config/database.js');


const crearPedido = (req, res) => {
  const { nit, numIdentificacion, fechaPedido, direccionEnvio, formaPago, estado, fechaEntrega, comentarios } = req.body;

  crearConsulta = `INSERT INTO pedido(nit, numIdentificacion, fechaPedido, direccionEnvio, formaPago, estado, fechaEntrega, comentarios)
                    VALUES(?, ?, ?, ?, ?, ?, ?, ?);`;

  const consulta = mysql2.format(crearConsulta, [nit, numIdentificacion, fechaPedido, direccionEnvio, formaPago, estado, fechaEntrega, comentarios]);

  try {
  database.query(consulta, (err, result) => {

    if (err) {
      res.status(400).json({noCreado : true, message : 'El cliente o empleado no están registrados en el sistema.' });
    } else {
      crearConsulta1 = `SELECT idPedido FROM pedido WHERE nit = ? AND numIdentificacion = ? AND fechaPedido = ?;`;
      const consulta1 = mysql2.format(crearConsulta1, [nit, numIdentificacion, fechaPedido]);

      try {
        database.query(consulta1, (err, result) => {
  
        if (err) {
          res.status(400).send(err);
        } 
        if (result[0] !== undefined){
          res.status(201).json({noCreado : false, message : 'Pedido creado correctamente', id : result[0]});
        } else {
          res.json({noEncontrado : true})
        }
    
      })
    } catch (err){
      res.status(500).send(err.message);
    }
    } 
  })
  } catch (err) {
  res.status(500).send(err.message);
  }
}


module.exports = {
  crearPedido
}