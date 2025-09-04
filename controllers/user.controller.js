// Este archivo contiene la lógica de la aplicación para las peticiones de los usuarios.
// Recibe la petición, usa el modelo para interactuar con la base de datos y envía la respuesta.

const Usuarios = require("../models/usuarios.model.js");

// Crear y guardar un nuevo usuario
exports.create = (req, res) => {
    // Validar la petición
    if (!req.body) {
        res.status(400).send({
            message: "¡El contenido no puede estar vacío!"
        });
    }

    // Crear un usuario
    const usuario = new Usuarios({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        contrasena: req.body.contrasena, // En una aplicación real, se debe hashear esta contraseña
        rol: req.body.rol
    });

    // Guardar el usuario en la base de datos
    Usuarios.create(usuario, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear el usuario."
            });
        else res.send(data);
    });
};

// Obtener todos los usuarios de la base de datos
exports.findAll = (req, res) => {
    Usuarios.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Ocurrió un error al recuperar los usuarios."
            });
        else res.send(data);
    });
};

// Encontrar un solo usuario por su ID
exports.findOne = (req, res) => {
    Usuarios.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se encontró un usuario con id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al recuperar el usuario con id " + req.params.id
                });
            }
        } else res.send(data);
    });
};

// Actualizar un usuario por su ID
exports.update = (req, res) => {
    // Validar la petición
    if (!req.body) {
        res.status(400).send({
            message: "¡El contenido no puede estar vacío!"
        });
    }

    Usuarios.updateById(
        req.params.id,
        new Usuarios(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `No se encontró un usuario con id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error al actualizar el usuario con id " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};

// Eliminar un usuario con el ID especificado
exports.delete = (req, res) => {
    Usuarios.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se encontró un usuario con id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "No se pudo eliminar el usuario con id " + req.params.id
                });
            }
        } else res.send({ message: `¡El usuario fue eliminado exitosamente!` });
    });
};
