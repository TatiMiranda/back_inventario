// Este archivo define las rutas de la API para los equipos
// y las vincula a los métodos del controlador.

const express = require("express");
const router = express.Router();
const equipos = require("../controllers/equipos.controller.js");

// Crear un nuevo equipo
router.post("/", equipos.create);

// Obtener todos los equipos
router.get("/", equipos.findAll);

// Obtener un solo equipo con el ID
router.get("/:id", equipos.findOne);

// Actualizar un equipo con el ID
router.put("/:id", equipos.update);

// Eliminar un equipo con el ID
router.delete("/:id", equipos.delete);

module.exports = router;
