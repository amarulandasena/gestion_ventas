const Router = require('express');

const { crearHistorial, actualizarHistorial, leerHistorial } = require('../controladores/ControladoresHistorial.js');

const router = Router();

// Petición POST.
router.post('/', crearHistorial);

// Petición PUT.
router.put('/:idPago', actualizarHistorial);

// Petición GET.
router.get('/:nit1', leerHistorial);

module.exports = router;