const Router = require('express');

const { crearCliente, leerCliente, eliminarCliente } = require('../controladores/ControladoresClientes.js');

const router = Router();

// Petición POST.
router.post('/', crearCliente);

// Petición GET.
router.get('/:nit', leerCliente);

// Petición DELETE.
router.delete('/:nit', eliminarCliente);

module.exports = router;