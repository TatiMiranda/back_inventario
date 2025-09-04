// Este archivo define las rutas de la API para los proveedores
// y las vincula a los métodos del controlador.

const express = require("express");
const router = express.Router();
const proveedores = require("../controllers/proveedores.controller.js");

// Crear un nuevo proveedor
router.post("/", proveedores.create);

// Obtener todos los proveedores
router.get("/", proveedores.findAll);

// Obtener un solo proveedor con el ID
router.get("/:id", proveedores.findOne);

// Actualizar un proveedor con el ID
router.put("/:id", proveedores.update);

// Eliminar un proveedor con el ID
router.delete("/:id", proveedores.delete);

module.exports = router;
