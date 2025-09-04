// Este archivo define las rutas de la API para las sedes
// y las vincula a los métodos del controlador.

const express = require("express");
const router = express.Router();
const sedes = require("../controllers/sedes.controller.js");

// Crear una nueva sede
router.post("/", sedes.create);

// Obtener todas las sedes
router.get("/", sedes.findAll);

// Obtener una sola sede con el ID
router.get("/:id", sedes.findOne);

// Actualizar una sede con el ID
router.put("/:id", sedes.update);

// Eliminar una sede con el ID
router.delete("/:id", sedes.delete);

module.exports = router;
