const mysql2 = require('mysql2');
const database = require('../config/database.js');

const agregarProducto = (req, res) => {
    const { idPedido, idProducto, nombreProducto, cantidad, precioUnitario } = req.body;

    crearConsulta = `INSERT INTO productospedido(idPedido, idProducto, nombreProducto, cantidad, precioUnitario)
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


module.exports = {
  agregarProducto
}