const Router = require('express');

const { actualizarNit, actualizarNumeroId, actualizarFechaPedido, actualizarDireccion, actualizarFormaPago,
    actualizarEstado, actualizarFechaEntrega, actualizarComentarios } = require('../controladores/ControladoresActualizarClientePedido');

const router = Router();

// Petición PUT nit.
router.put('/actualizarNit/:idPedido', actualizarNit);

// Petición PUT numeroId.
router.put('/actualizarId/:idPedido', actualizarNumeroId);

// Petición PUT fecha pedido.
router.put('/actualizarFechaPedido/:idPedido', actualizarFechaPedido);

// Petición PUT dirección.
router.put('/actualizarDirección/:idPedido', actualizarDireccion);

// Petición PUT forma de pago.
router.put('/actualizarFormaPago/:idPedido', actualizarFormaPago);

// Petición PUT estado.
router.put('/actualizarEstado/:idPedido', actualizarEstado);

// Petición PUT fecha de entrega.
router.put('/actualizarFechaEntrega/:idPedido', actualizarFechaEntrega);

// Petición PUT comentarios.
router.put('/actualizarComentarios/:idPedido', actualizarComentarios);

module.exports = router;