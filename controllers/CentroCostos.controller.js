// Este archivo contiene la lógica de la aplicación para las peticiones de los equipos.
// Recibe la petición, usa el modelo para interactuar con la base de datos y envía la respuesta.

const Equipos = require("../models/equipos.model.js");

// Crear y guardar un nuevo equipo
exports.create = (req, res) => {
    // Validar la petición
    if (!req.body) {
        res.status(400).send({
            message: "¡El contenido no puede estar vacío!"
        });
    }

    // Crear un equipo
    const equipo = new Equipos({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        codigoProducto: req.body.codigoProducto,
        id_categoria: req.body.id_categoria
    });

    // Guardar el equipo en la base de datos
    Equipos.create(equipo, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear el equipo."
            });
        else res.send(data);
    });
};

// Obtener todos los equipos de la base de datos
exports.findAll = (req, res) => {
    Equipos.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Ocurrió un error al recuperar los equipos."
            });
        else res.send(data);
    });
};

// Encontrar un solo equipo por su ID
exports.findOne = (req, res) => {
    Equipos.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se encontró un equipo con id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar el equipo con id " + req.params.id
                });
            }
        } else res.send(data);
    });
};

// Actualizar un equipo por su ID
exports.update = (req, res) => {
    // Validar la petición
    if (!req.body) {
        res.status(400).send({
            message: "¡El contenido no puede estar vacío!"
        });
    }

    Equipos.updateById(
        req.params.id,
        new Equipos(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `No se encontró un equipo con id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error al actualizar el equipo con id " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};

// Eliminar un equipo con el ID especificado
exports.delete = (req, res) => {
    Equipos.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se encontró un equipo con id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "No se pudo eliminar el equipo con id " + req.params.id
                });
            }
        } else res.send({ message: `¡El equipo fue eliminado exitosamente!` });
    });
};
