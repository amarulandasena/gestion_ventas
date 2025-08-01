const Router = require('express');

const { crearPedido, leerPedido } = require('../controladores/ControladoresPedidos.js');

const router = Router();

// Petición POST.
router.post('/', crearPedido);

// Petición GET.
router.get('/:idPedido', leerPedido);

module.exports = router;