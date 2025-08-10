const Router = require('express');

const { leerDescuentos, leerPromocion, crearPromocion } = require('../controladores/ControladoresPromociones.js');

const router = Router();

// Petición GET descuentos.
router.get('/descuentos', leerDescuentos);

// Petición GET promoción.
router.get('/:codigo', leerPromocion);

// Pertición POST.
router.post('/', crearPromocion);

module.exports = router;
