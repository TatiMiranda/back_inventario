// Este archivo contiene la lógica de la aplicación para las peticiones de los proveedores.
// Recibe la petición, usa el modelo para interactuar con la base de datos y envía la respuesta.

const Proveedores = require("../models/proveedores.model.js");

// Crear y guardar un nuevo proveedor
exports.create = (req, res) => {
    // Validar la petición
    if (!req.body) {
        res.status(400).send({
            message: "¡El contenido no puede estar vacío!"
        });
    }

    // Crear un proveedor
    const proveedor = new Proveedores({
        nombre: req.body.nombre,
        equipos_proveidos: req.body.equipos_proveidos,
        stock_proveido: req.body.stock_proveido
    });

    // Guardar el proveedor en la base de datos
    Proveedores.create(proveedor, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear el proveedor."
            });
        else res.send(data);
    });
};

// Obtener todos los proveedores de la base de datos
exports.findAll = (req, res) => {
    Proveedores.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Ocurrió un error al recuperar los proveedores."
            });
        else res.send(data);
    });
};

// Encontrar un solo proveedor por su ID
exports.findOne = (req, res) => {
    Proveedores.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se encontró un proveedor con id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar el proveedor con id " + req.params.id
                });
            }
        } else res.send(data);
    });
};

// Actualizar un proveedor por su ID
exports.update = (req, res) => {
    // Validar la petición
    if (!req.body) {
        res.status(400).send({
            message: "¡El contenido no puede estar vacío!"
        });
    }

    Proveedores.updateById(
        req.params.id,
        new Proveedores(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `No se encontró un proveedor con id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error al actualizar el proveedor con id " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};

// Eliminar un proveedor con el ID especificado
exports.delete = (req, res) => {
    Proveedores.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se encontró un proveedor con id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "No se pudo eliminar el proveedor con id " + req.params.id
                });
            }
        } else res.send({ message: `¡El proveedor fue eliminado exitosamente!` });
    });
};
