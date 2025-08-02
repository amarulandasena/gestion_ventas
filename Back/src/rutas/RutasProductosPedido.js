const Router = require('express');

const { agregarProducto , leerProductosPedido, eliminarProductosPedido} = require('../controladores/ControladoresProductosPedido.js');

const router = Router();

// Petición POST.
router.post('/', agregarProducto);

// Petición GET.
router.get('/:idPedido', leerProductosPedido);

// Petición DELETE.
router.delete('/:idPedido', eliminarProductosPedido);

module.exports = router;