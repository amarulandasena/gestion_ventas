const Router = require('express');

const { agregarProducto , leerProductosPedido} = require('../controladores/ControladoresProductosPedido.js');

const router = Router();

// Petición POST.
router.post('/', agregarProducto);

// Petición GET.
router.get('/:idPedido', leerProductosPedido);

module.exports = router;