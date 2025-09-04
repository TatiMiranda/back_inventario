// routes/seguimiento.routes.js
const express = require('express');
const router = express.Router();
const seguimientoController = require('../controllers/seguimiento.controller');

// Rutas CRUD
router.get('/', seguimientoController.getAll);
router.get('/:id', seguimientoController.getById);
router.post('/', seguimientoController.create);
router.put('/:id', seguimientoController.update);
router.delete('/:id', seguimientoController.delete);

module.exports = router;
