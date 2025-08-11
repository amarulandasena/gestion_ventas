const Router = require('express');

const { leerDescuentos, leerPromocion, crearPromocion, eliminarPromocion } = require('../controladores/ControladoresPromociones.js');

const router = Router();

// Petición GET descuentos.
router.get('/descuentos', leerDescuentos);

// Petición GET promoción.
router.get('/:codigo', leerPromocion);

// Pertición POST.
router.post('/', crearPromocion);

// Petición DELETE.
router.delete('/:codigo', eliminarPromocion);

module.exports = router;
