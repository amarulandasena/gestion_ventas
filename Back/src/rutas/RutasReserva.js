const Router = require('express');

const { crearReserva, agregarProductoReserva, leerReserva, leerProductosReserva } = require('../controladores/ControladoresReserva.js');

const router = Router();

// Petición POST.
router.post('/', crearReserva);

// Petición POST productos.
router.post('/productosReserva/', agregarProductoReserva);

// Petición GET cliente.
router.get('/:idReserva', leerReserva);

// Petición GET productos.
router.get('/productosReserva/:idReserva', leerProductosReserva);

module.exports = router;