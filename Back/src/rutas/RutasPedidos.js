const Router = require('express');

const { crearPedido, leerPedido, leerPedidoCliente, eliminarPedido } = require('../controladores/ControladoresPedidos.js');

const router = Router();

// Petición POST.
router.post('/', crearPedido);

// Petición GET.
router.get('/:idPedido', leerPedido);

// Petición GET pedidos de un cliente.
router.get('/consultarPedidos/:nit', leerPedidoCliente);

// Petición DELETE.
router.delete('/:idPedido', eliminarPedido);

module.exports = router;