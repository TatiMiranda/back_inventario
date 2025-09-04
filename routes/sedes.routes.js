// routes/sede.routes.js
const express = require('express');
const router = express.Router();
const sedeController = require('../controllers/sede.controller');

// Rutas CRUD
router.get('/', sedeController.getAll);
router.get('/:id', sedeController.getById);
router.post('/', sedeController.create);
router.put('/:id', sedeController.update);
router.delete('/:id', sedeController.delete);

module.exports = router;
