const Router = require('express');

const { crearHistorial, actualizarHistorial } = require('../controladores/ControladoresHistorial.js');

const router = Router();

// Petición POST.
router.post('/', crearHistorial);

// Petición PUT.
router.put('/:idPago', actualizarHistorial);

module.exports = router;