// Este archivo define las rutas de la API para el seguimiento
// y las vincula a los métodos del controlador.

const express = require("express");
const router = express.Router();
const seguimiento = require("../controllers/seguimiento.controller.js");

// Crear un nuevo movimiento de seguimiento
router.post("/", seguimiento.create);

// Obtener todos los movimientos de seguimiento
router.get("/", seguimiento.findAll);

// Obtener un solo movimiento con el ID
router.get("/:id", seguimiento.findOne);

// Actualizar un movimiento con el ID
router.put("/:id", seguimiento.update);

// Eliminar un movimiento con el ID
router.delete("/:id", seguimiento.delete);

module.exports = router;
