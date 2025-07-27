const Router = require('express');

const { agregarProducto } = require('../controladores/ControladoresProductosPedido.js');

const router = Router();

// Petición POST.
router.post('/', agregarProducto);

module.exports = router;