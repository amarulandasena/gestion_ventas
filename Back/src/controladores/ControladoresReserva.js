// Controladores para el CRUD de reserva.

const mysql2 = require('mysql2');
const database = require('../config/database.js');

const crearReserva = (req, res) => {

    const { nit, numIdentificacion, fechaReserva, fechaLimite } = req.body;

    const crearConsulta = `INSERT INTO reserva (nit, numIdentificacion, fechaReserva, fechaLimite)
                           VALUES (?, ?, ?, ?);`;
    const consulta = mysql2.format(crearConsulta, [nit, numIdentificacion, fechaReserva, fechaLimite]);

    try {
      database.query(consulta, (err, result) => { 

        if (err) {
          res.status(400).json({noCreado : true, message : 'El cliente o empleado no están registrados en el sistema.' });
        } else {
          const crearConsulta1 = `SELECT idReserva FROM reserva WHERE nit = ? AND numIdentificacion = ? AND fechaReserva = ?;`;
          const consulta1 = mysql2.format(crearConsulta1, [nit, numIdentificacion, fechaReserva]);

          try {
            database.query(consulta1, (err, result) => {
      
            if (err) {
              res.status(400).send(err);
            } 
            if (result[0] !== undefined){
              res.status(201).json({noCreado : false, message : 'Reserva creada correctamente', id : result[0]});
            } else {
              res.json({noEncontrado : true})
            }
          })
          } catch (err) {
            res.status(500).send(err.message);
          }
        }
        })
    } catch (err) {
      res.status(500).send(err.message);
    }
}


const agregarProductoReserva = (req, res) => {

    const { idReserva, idProducto, cantidad } = req.body;

    const crearConsulta = `INSERT INTO productosreserva (idReserva, idProducto, cantidad)
                           VALUES (?, ?, ?);`;

    const consulta = mysql2.format(crearConsulta, [idReserva, idProducto, cantidad]);

    try {
    database.query(consulta, (err, result) => {

      if (err) {
        res.status(400).json({noEncontrado: true, message : 'El código de la reserva o producto es incorrecto.' });
      } else {
        res.status(201).json({noEncontrado: false, message : 'Producto reservado correctamente.' });
      } 
    })
    } catch (err) {
    res.status(500).send(err.message);
    }
}


const leerReserva = (req, res) => {

  const { idReserva } = req.params;

  const leerConsulta = `SELECT * FROM reserva WHERE idReserva = ?;`;
  const consulta = mysql2.format(leerConsulta, [idReserva]);

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


const leerProductosReserva = (req, res) => {

  const { idReserva } = req.params;

  const leerConsulta = `SELECT * FROM productosreserva WHERE idReserva = ?;`;
  const consulta = mysql2.format(leerConsulta, [idReserva]);

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


const eliminarReserva = (req, res) => {
  
  const { idReserva } = req.params;

  const eliminarConsulta = `DELETE FROM reserva WHERE idReserva = ?;`;
  const consulta = mysql2.format(eliminarConsulta, [idReserva]);

  try {
    database.query(consulta, (err, result) => {

      if (err) {
        res.status(400).send(err);
      }

      if (result.affectedRows == 1){
        const eliminarConsulta1 = `DELETE FROM productosreserva WHERE idReserva = ?;`;
        const consulta1 = mysql2.format(eliminarConsulta1, [idReserva]);

        try{
          database.query(consulta1, (err, result) => {

            if (err) {
              res.status(400).send(err);
            }

            if (result.affectedRows > 0){
              res.status(404).json({ message : 'Valide la información de la reserva.'})
            } else {
              res.status(200).json({ message : 'Reserva eliminada correctamente.'})
            }
          })
        } catch(err) {
          res.status(500).send(err.message);
        } 
      } else {
        res.status(404).json({ message : 'Reserva no registrada'})
      }
    })
  } catch (err) {
    res.status(500).send(err.message);
  }
}





module.exports = {
  crearReserva,
  agregarProductoReserva,
  leerReserva,
  leerProductosReserva,
  eliminarReserva
}