// Este archivo contiene la lógica de la aplicación para las peticiones de los centros de costos.
// Recibe la petición, usa el modelo para interactuar con la base de datos y envía la respuesta.

const CentroCostos = require("../models/centroCostos.model.js");

// Crear y guardar un nuevo centro de costos
exports.create = (req, res) => {
    // Validar la petición
    if (!req.body) {
        res.status(400).send({
            message: "¡El contenido no puede estar vacío!"
        });
    }

    // Crear un centro de costos
    const centroCosto = new CentroCostos({
        nombre: req.body.nombre,
        id_sede: req.body.id_sede,
        id_equipo: req.body.id_equipo,
        id_seguimiento: req.body.id_seguimiento
    });

    // Guardar el centro de costos en la base de datos
    CentroCostos.create(centroCosto, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear el centro de costos."
            });
        else res.send(data);
    });
};

// Obtener todos los centros de costos de la base de datos
exports.findAll = (req, res) => {
    CentroCostos.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Ocurrió un error al recuperar los centros de costos."
            });
        else res.send(data);
    });
};

// Encontrar un solo centro de costos por su ID
exports.findOne = (req, res) => {
    CentroCostos.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se encontró un centro de costos con id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar el centro de costos con id " + req.params.id
                });
            }
        } else res.send(data);
    });
};

// Actualizar un centro de costos por su ID
exports.update = (req, res) => {
    // Validar la petición
    if (!req.body) {
        res.status(400).send({
            message: "¡El contenido no puede estar vacío!"
        });
    }

    CentroCostos.updateById(
        req.params.id,
        new CentroCostos(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `No se encontró un centro de costos con id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error al actualizar el centro de costos con id " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};

// Eliminar un centro de costos con el ID especificado
exports.delete = (req, res) => {
    CentroCostos.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se encontró un centro de costos con id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "No se pudo eliminar el centro de costos con id " + req.params.id
                });
            }
        } else res.send({ message: `¡El centro de costos fue eliminado exitosamente!` });
    });
};
