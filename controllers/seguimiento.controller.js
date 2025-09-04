// Este archivo contiene la lógica de la aplicación para las peticiones de seguimiento.
// Recibe la petición, usa el modelo para interactuar con la base de datos y envía la respuesta.

const Seguimiento = require("../models/seguimiento.model.js");

// Crear y guardar un nuevo movimiento de seguimiento
exports.create = (req, res) => {
    // Validar la petición
    if (!req.body) {
        res.status(400).send({
            message: "¡El contenido no puede estar vacío!"
        });
    }

    // Crear un movimiento de seguimiento
    const movimiento = new Seguimiento({
        id_equipo: req.body.id_equipo,
        cantidad: req.body.cantidad,
        tipo_movimiento: req.body.tipo_movimiento,
        id_sede_origen: req.body.id_sede_origen,
        id_sede_destino: req.body.id_sede_destino
    });

    // Guardar el movimiento en la base de datos
    Seguimiento.create(movimiento, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear el movimiento."
            });
        else res.send(data);
    });
};

// Obtener todos los movimientos de la base de datos
exports.findAll = (req, res) => {
    Seguimiento.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Ocurrió un error al recuperar los movimientos."
            });
        else res.send(data);
    });
};

// Encontrar un solo movimiento por su ID
exports.findOne = (req, res) => {
    Seguimiento.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se encontró un movimiento con id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar el movimiento con id " + req.params.id
                });
            }
        } else res.send(data);
    });
};

// Actualizar un movimiento por su ID
exports.update = (req, res) => {
    // Validar la petición
    if (!req.body) {
        res.status(400).send({
            message: "¡El contenido no puede estar vacío!"
        });
    }

    Seguimiento.updateById(
        req.params.id,
        new Seguimiento(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `No se encontró un movimiento con id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error al actualizar el movimiento con id " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};

// Eliminar un movimiento con el ID especificado
exports.delete = (req, res) => {
    Seguimiento.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se encontró un movimiento con id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "No se pudo eliminar el movimiento con id " + req.params.id
                });
            }
        } else res.send({ message: `¡El movimiento fue eliminado exitosamente!` });
    });
};
