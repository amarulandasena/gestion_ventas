const Router = require('express');

const { crearReserva, agregarProductoReserva, leerReserva, leerProductosReserva, eliminarReserva, } = require('../controladores/ControladoresReserva.js');

const router = Router();

// Petición POST.
router.post('/', crearReserva);

// Petición POST productos.
router.post('/productosReserva/', agregarProductoReserva);

// Petición GET cliente.
router.get('/:idReserva', leerReserva);

// Petición GET productos.
router.get('/productosReserva/:idReserva', leerProductosReserva);

// Petición DELETE.
router.delete('/:idReserva', eliminarReserva);

module.exports = router;