const Router = require('express');

const { agregarProducto, crearPedido } = require('../controladores/ControladoresPedidos.js');

const router = Router();

// Petición POST.
router.post('/', crearPedido);

// Petición POST productos.
router.post('/', agregarProducto);

module.exports = router;