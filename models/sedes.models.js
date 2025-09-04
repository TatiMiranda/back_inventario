// Este archivo representa el modelo para la tabla `sedes`.
// Contiene las funciones para interactuar directamente con la base de datos.

// Asume que tienes una conexión a la base de datos (por ejemplo, 'db') disponible.
// const db = require('../config/db.config'); // Debes ajustar esta ruta.

const Sedes = function(sede) {
    this.id_sede = sede.id_sede;
    this.nombre = sede.nombre;
    this.direccion = sede.direccion;
};

// Crear una nueva sede
Sedes.create = (newSede, result) => {
    // Usamos un placeholder para la conexión a la base de datos.
    // Reemplaza esto con tu lógica de inserción.
    const query = `INSERT INTO sedes SET ?`;
    console.log(`Executing query: ${query}`);
    console.log(`With data: ${JSON.stringify(newSede)}`);
    // db.query(query, newSede, (err, res) => {
    //     if (err) {
    //         console.log("Error creando sede:", err);
    //         result(err, null);
    //         return;
    //     }
    //     console.log("Sede creada:", { id: res.insertId, ...newSede });
    //     result(null, { id: res.insertId, ...newSede });
    // });
    // Simulando una respuesta exitosa
    result(null, { id: "sedeA", ...newSede });
};

// Encontrar una sede por ID
Sedes.findById = (sedeId, result) => {
    const query = `SELECT * FROM sedes WHERE id_sede = ?`;
    console.log(`Executing query: ${query}`);
    console.log(`With ID: ${sedeId}`);
    // db.query(query, sedeId, (err, res) => {
    //     if (err) {
    //         console.log("Error encontrando sede:", err);
    //         result(err, null);
    //         return;
    //     }
    //     if (res.length) {
    //         console.log("Sede encontrada:", res[0]);
    //         result(null, res[0]);
    //         return;
    //     }
    //     // No se encontró una sede con ese ID
    //     result({ kind: "not_found" }, null);
    // });
    // Simulando una respuesta exitosa
    result(null, { id_sede: sedeId, nombre: "Sede Central", direccion: "Calle 123" });
};

// Obtener todas las sedes
Sedes.getAll = (result) => {
    const query = `SELECT * FROM sedes`;
    console.log(`Executing query: ${query}`);
    // db.query(query, (err, res) => {
    //     if (err) {
    //         console.log("Error recuperando sedes:", err);
    //         result(null, err);
    //         return;
    //     }
    //     console.log("Sedes:", res);
    //     result(null, res);
    // });
    // Simulando una respuesta exitosa
    result(null, [
        { id_sede: "sedeA", nombre: "Sede Central", direccion: "Calle 123" },
        { id_sede: "sedeB", nombre: "Sede Norte", direccion: "Avenida 456" }
    ]);
};

// Actualizar una sede por ID
Sedes.updateById = (id, sede, result) => {
    const query = `UPDATE sedes SET nombre = ?, direccion = ? WHERE id_sede = ?`;
    console.log(`Executing query: ${query}`);
    console.log(`With data: ${JSON.stringify(sede)}`);
    // db.query(query, [sede.nombre, sede.direccion, id], (err, res) => {
    //     if (err) {
    //         console.log("Error actualizando sede:", err);
    //         result(null, err);
    //         return;
    //     }
    //     if (res.affectedRows == 0) {
    //         // No se encontró una sede con ese ID
    //         result({ kind: "not_found" }, null);
    //         return;
    //     }
    //     console.log("Sede actualizada:", { id: id, ...sede });
    //     result(null, { id: id, ...sede });
    // });
    // Simulando una respuesta exitosa
    result(null, { id: id, ...sede });
};

// Eliminar una sede por ID
Sedes.remove = (id, result) => {
    const query = `DELETE FROM sedes WHERE id_sede = ?`;
    console.log(`Executing query: ${query}`);
    console.log(`With ID: ${id}`);
    // db.query(query, id, (err, res) => {
    //     if (err) {
    //         console.log("Error eliminando sede:", err);
    //         result(null, err);
    //         return;
    //     }
    //     if (res.affectedRows == 0) {
    //         // No se encontró una sede con ese ID
    //         result({ kind: "not_found" }, null);
    //         return;
    //     }
    //     console.log("Sede eliminada con ID:", id);
    //     result(null, res);
    // });
    // Simulando una respuesta exitosa
    result(null, { affectedRows: 1 });
};

module.exports = Sedes;
