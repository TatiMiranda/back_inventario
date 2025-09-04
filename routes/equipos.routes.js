const express = require('express');
const router = express.Router();
const equiposController = require('../controllers/equipos.controller');

// Rutas CRUD para equipos
router.get('/', equiposController.getAll);        // GET /api/equipos
router.get('/:id', equiposController.getById);    // GET /api/equipos/:id
router.post('/', equiposController.create);       // POST /api/equipos
router.put('/:id', equiposController.update);     // PUT /api/equipos/:id
router.delete('/:id', equiposController.delete);  // DELETE /api/equipos/:id

module.exports = router;
