const Router = require('express');

const { actualizarNumIdentificacion, actualizarDescripcion, actualizarDescuento, actualizarFechaInicio, actualizarFechaFinal,
        actualizarTipoPromocion } = require('../controladores/ControladoresActualizarPromocion.js');

const router = Router();

// Petición PUT número de identificación.
router.put('/actualizarNumIdentificacion/:codigo', actualizarNumIdentificacion);

// Petición PUT descripción.
router.put('/actualizarDescripcion/:codigo', actualizarDescripcion);

// Petición PUT descuento.
router.put('/actualizarDescuento/:codigo', actualizarDescuento);

// Petición PUT fecha inicio.
router.put('/actualizarFechaInicio/:codigo', actualizarFechaInicio);

// Petición PUT fecha final.
router.put('/actualizarFechaFinal/:codigo', actualizarFechaFinal);

// Petición PUT tipo promoción.
router.put('/actualizarTipoPromocion/:codigo', actualizarTipoPromocion);

module.exports = router;
