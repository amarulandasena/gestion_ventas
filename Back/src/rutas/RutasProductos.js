const Router = require('express');

const { crearProducto, leerProducto, eliminarProducto } = require('../controladores/ControladoresProducto.js');

const router = Router();

// Petición POST.
router.post('/', crearProducto);

// Petición GET.
router.get('/:idProducto', leerProducto);

// Petición DELETE.
router.delete('/:idProducto', eliminarProducto);

module.exports = router;