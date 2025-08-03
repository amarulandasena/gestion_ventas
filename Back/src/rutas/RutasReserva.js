const Router = require('express');

const { crearReserva, agregarProductoReserva } = require('../controladores/ControladoresReserva.js');

const router = Router();

// Petición POST.
router.post('/', crearReserva);

// Petición POST productos.
router.post('/productosReserva/', agregarProductoReserva);

module.exports = router;