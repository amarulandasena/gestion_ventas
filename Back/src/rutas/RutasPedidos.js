const Router = require('express');

const { crearPedido, leerPedido, leerPedidoCliente } = require('../controladores/ControladoresPedidos.js');

const router = Router();

// Petición POST.
router.post('/', crearPedido);

// Petición GET.
router.get('/:idPedido', leerPedido);

// Petición GET pedidos de un cliente.
router.get('/consultarPedidos/:nit', leerPedidoCliente);

module.exports = router;