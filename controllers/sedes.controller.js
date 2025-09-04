// Este archivo contiene la lógica de la aplicación para las peticiones de las sedes.
// Recibe la petición, usa el modelo para interactuar con la base de datos y envía la respuesta.

const Sedes = require("../models/sedes.model.js");

// Crear y guardar una nueva sede
exports.create = (req, res) => {
    // Validar la petición
    if (!req.body) {
        res.status(400).send({
            message: "¡El contenido no puede estar vacío!"
        });
    }

    // Crear una sede
    const sede = new Sedes({
        id_sede: req.body.id_sede,
        nombre: req.body.nombre,
        direccion: req.body.direccion
    });

    // Guardar la sede en la base de datos
    Sedes.create(sede, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear la sede."
            });
        else res.send(data);
    });
};

// Obtener todas las sedes de la base de datos
exports.findAll = (req, res) => {
    Sedes.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Ocurrió un error al recuperar las sedes."
            });
        else res.send(data);
    });
};

// Encontrar una sola sede por su ID
exports.findOne = (req, res) => {
    Sedes.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se encontró una sede con id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar la sede con id " + req.params.id
                });
            }
        } else res.send(data);
    });
};

// Actualizar una sede por su ID
exports.update = (req, res) => {
    // Validar la petición
    if (!req.body) {
        res.status(400).send({
            message: "¡El contenido no puede estar vacío!"
        });
    }

    Sedes.updateById(
        req.params.id,
        new Sedes(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `No se encontró una sede con id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error al actualizar la sede con id " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};

// Eliminar una sede con el ID especificado
exports.delete = (req, res) => {
    Sedes.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se encontró una sede con id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "No se pudo eliminar la sede con id " + req.params.id
                });
            }
        } else res.send({ message: `¡La sede fue eliminada exitosamente!` });
    });
};
