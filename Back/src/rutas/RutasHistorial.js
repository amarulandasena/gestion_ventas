const Router = require('express');

const { crearHistorial } = require('../controladores/ControladoresHistorial.js');

const router = Router();

// Petición POST.
router.post('/', crearHistorial);

module.exports = router;