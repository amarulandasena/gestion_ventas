const Router = require('express');

const { actualizarNombres, actualizarApellidos, actualizarFechaNacimiento, actualizarDireccion, actualizarNumeroTelefonico, actualizarNumeroCelular,
    actualizarEmail, actualizarContacto, actualizarNumContacto, actualizarCargo, actualizarFechaIngreso, actualizarStatus, 
    actualizarContrasegna } = require('../controladores/ControladoresActualizarPersonal');

const router = Router();

// Petición PUT nombres.
router.put('/actualizarNombres/:numIdentificacion', actualizarNombres);

// Petición PUT apellidos.
router.put('/actualizarApellidos/:numIdentificacion', actualizarApellidos);

// Petición PUT fecha de nacimiento.
router.put('/actualizarFechaNacimiento/:numIdentificacion', actualizarFechaNacimiento);

// Petición PUT dirección.
router.put('/actualizarDireccion/:numIdentificacion', actualizarDireccion);

// Petición PUT número telefónico.
router.put('/actualizarNumeroTelefonico/:numIdentificacion', actualizarNumeroTelefonico);

// Petición PUT número celular.
router.put('/actualizarNumeroCelular/:numIdentificacion', actualizarNumeroCelular);

// Petición PUT email.
router.put('/actualizarEmail/:numIdentificacion', actualizarEmail);

// Petición PUT contacto.
router.put('/actualizarContacto/:numIdentificacion', actualizarContacto);

// Petición PUT número contacto.
router.put('/actualizarNumeroContacto/:numIdentificacion', actualizarNumContacto);

// Petición PUT cargo.
router.put('/actualizarCargo/:numIdentificacion', actualizarCargo);

// Petición PUT fecha de ingreso.
router.put('/actualizarFechaIngreso/:numIdentificacion', actualizarFechaIngreso);

// Petición PUT status.
router.put('/actualizarStatus/:numIdentificacion', actualizarStatus);

// Petición PUT contrasegna.
router.put('/actualizarContrasegna/:numIdentificacion', actualizarContrasegna);


module.exports = router;