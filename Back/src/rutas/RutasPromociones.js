const Router = require('express');

const { leerDescuentos } = require('../controladores/ControladoresPromociones.js');

const router = Router();

// Petición GET descuentos.
router.get('/descuentos', leerDescuentos);

module.exports = router;
