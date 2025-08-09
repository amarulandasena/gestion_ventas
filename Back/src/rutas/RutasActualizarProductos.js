const Router = require('express');

const { actualizarNombre, actualizarDescripcion, actualizarPrecio, actualizarExistencias, actualizarCategoria,
        actualizarReferencia, actualizarDescuento} = require('../controladores/ControladoresActualizarProducto');

const router = Router();

// Petición PUT nombre.
router.put('/actualizarNombre/:idProducto', actualizarNombre);

// Petición PUT descripción.
router.put('/actualizarDescripcion/:idProducto', actualizarDescripcion);

// Petición PUT precio.
router.put('/actualizarPrecio/:idProducto', actualizarPrecio);

// Petición PUT existencias.
router.put('/actualizarExistencias/:idProducto', actualizarExistencias);

// Petición PUT categoría.
router.put('/actualizarCategoria/:idProducto', actualizarCategoria);

// Petición PUT referencia.
router.put('/actualizarReferencia/:idProducto', actualizarReferencia);

// Petición PUT descuento.
router.put('/actualizarDescuento/:idProducto', actualizarDescuento);

module.exports = router;

