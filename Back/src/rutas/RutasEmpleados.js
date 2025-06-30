const Router = require('express');

const { crearEmpleado, leerEmpleado, eliminarEmpleado } = require('../controladores/ControladoresPersonal.js');

const router = Router();

// Petición POST.
router.post('/', crearEmpleado);

// Petición GET.
router.get('/:numIdentificacion', leerEmpleado);

// Petición DELETE.
router.delete('/:numIdentificacion', eliminarEmpleado);

module.exports = router;