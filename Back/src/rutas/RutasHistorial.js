const Router = require('express');

const { crearHistorial, actualizarNitHistorial, actualizarHistorial, actualizarValorHistorial, leerHistorial } = require('../controladores/ControladoresHistorial.js');

const router = Router();

// Petición POST.
router.post('/', crearHistorial);

// Petición PUT nit.
router.put('/actualizarNit/:idPago', actualizarNitHistorial);

// Petición PUT fecha.
router.put('/actualizarFecha/:idPago', actualizarHistorial);

// Petición PUT valor.
router.put('/actualizarValor/:idPago', actualizarValorHistorial);

// Petición GET.
router.get('/:nit1', leerHistorial);

module.exports = router;