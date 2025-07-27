const Router = require('express');

const { crearPedido } = require('../controladores/ControladoresPedidos.js');

const router = Router();

// Petición POST.
router.post('/', crearPedido);

module.exports = router;