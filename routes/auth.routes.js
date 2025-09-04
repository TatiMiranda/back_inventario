// routes/auth.routes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Ruta para el registro de nuevos usuarios
router.post('/register', authController.register);

// Ruta para que los usuarios inicien sesión
router.post('/login', authController.login);

module.exports = router;