const Router = require('express');

const { actualizarRazonSocial, actualizarCiudad, actualizarDireccion, actualizarNumTelefonico, actualizarEmail, actualizarAdministrador,
  actualizarTelAdministrador, actualizarEmailAdministrador, actualizarSector, actualizarActividad, actualizarTamagno, actualizarNumEmpleados,
  actualizarProducto, actualizarPeriodoPago } = require('../controladores/ControladoresActualizarClientes.js');

const router = Router();

// Petición PUT Razón social.
router.put('/actualizarRazonSocial/:nit', actualizarRazonSocial);

// Petición PUT ciudad.
router.put('/actualizarCiudad/:nit', actualizarCiudad);

// Petición PUT dirección.
router.put('/actualizarDireccion/:nit', actualizarDireccion);

// Petición PUT número telefónico.
router.put('/actualizarNumTelefonico/:nit', actualizarNumTelefonico);

// Petición PUT email.
router.put('/actualizarEmail/:nit', actualizarEmail);

// Petición PUT administrador.
router.put('/actualizarAdministrador/:nit', actualizarAdministrador);

// Petición PUT teléfono administrador.
router.put('/actualizarTelAdministrador/:nit', actualizarTelAdministrador);

// Petición PUT email administrador.
router.put('/actualizarEmailAdministrador/:nit', actualizarEmailAdministrador);

// Petición PUT sector.
router.put('/actualizarSector/:nit', actualizarSector);

// Petición PUT actividad.
router.put('/actualizarActividad/:nit', actualizarActividad);

// Petición PUT tamaño.
router.put('/actualizarTamagno/:nit', actualizarTamagno);

// Petición PUT número de empleados.
router.put('/actualizarNumEmpleados/:nit', actualizarNumEmpleados);

// Petición PUT producto.
router.put('/actualizarProducto/:nit', actualizarProducto);

// Petición PUT periodo de pago.
router.put('/actualizarPeriodoPago/:nit', actualizarPeriodoPago);

module.exports = router;