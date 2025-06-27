const { Router } = require('express');

const { leerLogin } = require('../controladores/ControladorLogin');

const router = Router();

// Petición POST.
router.post('/', leerLogin);

module.exports = router;