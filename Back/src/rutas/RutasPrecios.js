const Router = require('express');

const { leerPrecios, leerPrecio } = require('../controladores/ControladoresPrecios.js');

const router = Router();

// Petición GET consulta nombre.
router.get('/preciosNombre/:nombreProducto', leerPrecios);

// Petición GET consulta código.
router.get('/precioCodigo/:idProducto', leerPrecio);

module.exports = router;