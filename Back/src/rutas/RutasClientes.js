const Router = require('express');

const { crearCliente, leerCliente } = require('../controladores/ControladoresClientes.js');

const router = Router();

// Petición POST.
router.post('/', crearCliente);

// Petición GET.
router.get('/:nit', leerCliente);

module.exports = router;