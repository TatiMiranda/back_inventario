// Este archivo define las rutas de la API para los usuarios
// y las vincula a los métodos del controlador.

const express = require("express");
const router = express.Router();
const usuarios = require("../controllers/usuarios.controller.js");
const API_URL = "http://localhost:3000/api/users";


// Crear un nuevo usuario
router.post("/", usuarios.create);

// Obtener todos los usuarios
router.get("/", usuarios.findAll);

// Obtener un solo usuario con el ID
router.get("/:id", usuarios.findOne);

// Actualizar un usuario con el ID
router.put("/:id", usuarios.update);

// Eliminar un usuario con el ID
router.delete("/:id", usuarios.delete);

module.exports = router;
