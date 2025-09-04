// Este archivo representa el modelo para la tabla `usuarios`.
// Contiene las funciones para interactuar directamente con la base de datos.

// Asume que tienes una conexión a la base de datos (por ejemplo, 'db') disponible.
// const db = require('../config/db.config'); // Debes ajustar esta ruta.

const Usuarios = function(usuario) {
    this.nombre = usuario.nombre;
    this.apellido = usuario.apellido;
    this.email = usuario.email;
    this.telefono = usuario.telefono;
    this.direccion = usuario.direccion;
    this.contrasena = usuario.contrasena;
    this.rol = usuario.rol;
};

// Crear un nuevo usuario
Usuarios.create = (newUsuario, result) => {
    // Usamos un placeholder para la conexión a la base de datos.
    // Reemplaza esto con tu lógica de inserción.
    const query = `INSERT INTO usuarios SET ?`;
    console.log(`Executing query: ${query}`);
    console.log(`With data: ${JSON.stringify(newUsuario)}`);
    // db.query(query, newUsuario, (err, res) => {
    //     if (err) {
    //         console.log("Error creando usuario:", err);
    //         result(err, null);
    //         return;
    //     }
    //     console.log("Usuario creado:", { id: res.insertId, ...newUsuario });
    //     result(null, { id: res.insertId, ...newUsuario });
    // });
    // Simulando una respuesta exitosa
    result(null, { id: 1, ...newUsuario });
};

// Encontrar un usuario por ID
Usuarios.findById = (usuarioId, result) => {
    const query = `SELECT * FROM usuarios WHERE id_usuario = ?`;
    console.log(`Executing query: ${query}`);
    console.log(`With ID: ${usuarioId}`);
    // db.query(query, usuarioId, (err, res) => {
    //     if (err) {
    //         console.log("Error encontrando usuario:", err);
    //         result(err, null);
    //         return;
    //     }
    //     if (res.length) {
    //         console.log("Usuario encontrado:", res[0]);
    //         result(null, res[0]);
    //         return;
    //     }
    //     // No se encontró un usuario con ese ID
    //     result({ kind: "not_found" }, null);
    // });
    // Simulando una respuesta exitosa
    result(null, { id_usuario: usuarioId, nombre: "Juan", apellido: "Pérez", email: "juan@example.com", rol: "usuario" });
};

// Encontrar un usuario por email (útil para login)
Usuarios.findByEmail = (email, result) => {
    const query = `SELECT * FROM usuarios WHERE email = ?`;
    console.log(`Executing query: ${query}`);
    console.log(`With email: ${email}`);
    // db.query(query, email, (err, res) => {
    //     if (err) {
    //         console.log("Error encontrando usuario por email:", err);
    //         result(err, null);
    //         return;
    //     }
    //     if (res.length) {
    //         console.log("Usuario encontrado por email:", res[0]);
    //         result(null, res[0]);
    //         return;
    //     }
    //     // No se encontró un usuario con ese email
    //     result({ kind: "not_found" }, null);
    // });
    // Simulando una respuesta exitosa
    result(null, { id_usuario: 1, nombre: "Juan", apellido: "Pérez", email: email, rol: "usuario" });
};

// Obtener todos los usuarios
Usuarios.getAll = (result) => {
    const query = `SELECT * FROM usuarios`;
    console.log(`Executing query: ${query}`);
    // db.query(query, (err, res) => {
    //     if (err) {
    //         console.log("Error recuperando usuarios:", err);
    //         result(null, err);
    //         return;
    //     }
    //     console.log("Usuarios:", res);
    //     result(null, res);
    // });
    // Simulando una respuesta exitosa
    result(null, [
        { id_usuario: 1, nombre: "Juan", apellido: "Pérez", email: "juan@example.com", rol: "usuario" },
        { id_usuario: 2, nombre: "Ana", apellido: "Gómez", email: "ana@example.com", rol: "admin" }
    ]);
};

// Actualizar un usuario por ID
Usuarios.updateById = (id, usuario, result) => {
    const query = `UPDATE usuarios SET nombre = ?, apellido = ?, email = ?, telefono = ?, direccion = ?, contrasena = ?, rol = ? WHERE id_usuario = ?`;
    console.log(`Executing query: ${query}`);
    console.log(`With data: ${JSON.stringify(usuario)}`);
    // db.query(query, [usuario.nombre, usuario.apellido, usuario.email, usuario.telefono, usuario.direccion, usuario.contrasena, usuario.rol, id], (err, res) => {
    //     if (err) {
    //         console.log("Error actualizando usuario:", err);
    //         result(null, err);
    //         return;
    //     }
    //     if (res.affectedRows == 0) {
    //         // No se encontró un usuario con ese ID
    //         result({ kind: "not_found" }, null);
    //         return;
    //     }
    //     console.log("Usuario actualizado:", { id: id, ...usuario });
    //     result(null, { id: id, ...usuario });
    // });
    // Simulando una respuesta exitosa
    result(null, { id: id, ...usuario });
};

// Eliminar un usuario por ID
Usuarios.remove = (id, result) => {
    const query = `DELETE FROM usuarios WHERE id_usuario = ?`;
    console.log(`Executing query: ${query}`);
    console.log(`With ID: ${id}`);
    // db.query(query, id, (err, res) => {
    //     if (err) {
    //         console.log("Error eliminando usuario:", err);
    //         result(null, err);
    //         return;
    //     }
    //     if (res.affectedRows == 0) {
    //         // No se encontró un usuario con ese ID
    //         result({ kind: "not_found" }, null);
    //         return;
    //     }
    //     console.log("Usuario eliminado con ID:", id);
    //     result(null, res);
    // });
    // Simulando una respuesta exitosa
    result(null, { affectedRows: 1 });
};

module.exports = Usuarios;
