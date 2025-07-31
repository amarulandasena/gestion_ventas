const Router = require('express');

const { actualizarNombreProducto, actualizarCantidadProducto, actualizarPrecioUnitario, 
    eliminarProductoPedido } = require('../controladores/ControladoresActualizarProductoPedido');


const router = Router();

// Petición PUT nombre.
router.put('/actualizarNombre/:idPedido', actualizarNombreProducto);

// Petición PUT cantidad.
router.put('/actualizarCantidad/:idPedido', actualizarCantidadProducto);

// Petición PUT precio.
router.put('/actualizarPrecio/:idPedido', actualizarPrecioUnitario);

// Petición DELETE producto.
router.delete('/eliminarProducto/:idPedido', eliminarProductoPedido);

module.exports = router;