// Este archivo define las rutas de la API para los centros de costos
// y las vincula a los métodos del controlador.

const express = require("express");
const router = express.Router();
const centroCostos = require("../controllers/centroCostos.controller.js");

// Crear un nuevo centro de costos
router.post("/", centroCostos.create);

// Obtener todos los centros de costos
router.get("/", centroCostos.findAll);

// Obtener un solo centro de costos con el ID
router.get("/:id", centroCostos.findOne);

// Actualizar un centro de costos con el ID
router.put("/:id", centroCostos.update);

// Eliminar un centro de costos con el ID
router.delete("/:id", centroCostos.delete);

module.exports = router;
