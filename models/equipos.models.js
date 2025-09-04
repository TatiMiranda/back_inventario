// Este archivo representa el modelo para la tabla `equipos`.
// Contiene las funciones para interactuar directamente con la base de datos.

// Asume que tienes una conexión a la base de datos (por ejemplo, 'db') disponible.
// const db = require('../config/db.config'); // Debes ajustar esta ruta.

const Equipos = function(equipo) {
    this.nombre = equipo.nombre;
    this.descripcion = equipo.descripcion;
    this.codigoProducto = equipo.codigoProducto;
    this.id_categoria = equipo.id_categoria;
};

// Crear un nuevo equipo
Equipos.create = (newEquipo, result) => {
    // Usamos un placeholder para la conexión a la base de datos.
    // Reemplaza esto con tu lógica de inserción.
    const query = `INSERT INTO equipos SET ?`;
    console.log(`Executing query: ${query}`);
    console.log(`With data: ${JSON.stringify(newEquipo)}`);
    // db.query(query, newEquipo, (err, res) => {
    //     if (err) {
    //         console.log("Error creando equipo:", err);
    //         result(err, null);
    //         return;
    //     }
    //     console.log("Equipo creado:", { id: res.insertId, ...newEquipo });
    //     result(null, { id: res.insertId, ...newEquipo });
    // });
    // Simulando una respuesta exitosa
    result(null, { id: 1, ...newEquipo });
};

// Encontrar un equipo por ID
Equipos.findById = (equipoId, result) => {
    const query = `SELECT * FROM equipos WHERE id_equipo = ?`;
    console.log(`Executing query: ${query}`);
    console.log(`With ID: ${equipoId}`);
    // db.query(query, equipoId, (err, res) => {
    //     if (err) {
    //         console.log("Error encontrando equipo:", err);
    //         result(err, null);
    //         return;
    //     }
    //     if (res.length) {
    //         console.log("Equipo encontrado:", res[0]);
    //         result(null, res[0]);
    //         return;
    //     }
    //     // No se encontró un equipo con ese ID
    //     result({ kind: "not_found" }, null);
    // });
    // Simulando una respuesta exitosa
    result(null, { id_equipo: equipoId, nombre: "Laptop", descripcion: "Portátil de 15 pulgadas", codigoProducto: "LT-001", id_categoria: 1 });
};

// Obtener todos los equipos
Equipos.getAll = (result) => {
    const query = `SELECT * FROM equipos`;
    console.log(`Executing query: ${query}`);
    // db.query(query, (err, res) => {
    //     if (err) {
    //         console.log("Error recuperando equipos:", err);
    //         result(null, err);
    //         return;
    //     }
    //     console.log("Equipos:", res);
    //     result(null, res);
    // });
    // Simulando una respuesta exitosa
    result(null, [
        { id_equipo: 1, nombre: "Laptop", descripcion: "Portátil de 15 pulgadas", codigoProducto: "LT-001", id_categoria: 1 },
        { id_equipo: 2, nombre: "Mouse", descripcion: "Mouse óptico inalámbrico", codigoProducto: "MS-002", id_categoria: 2 }
    ]);
};

// Actualizar un equipo por ID
Equipos.updateById = (id, equipo, result) => {
    const query = `UPDATE equipos SET nombre = ?, descripcion = ?, codigoProducto = ?, id_categoria = ? WHERE id_equipo = ?`;
    console.log(`Executing query: ${query}`);
    console.log(`With data: ${JSON.stringify(equipo)}`);
    // db.query(query, [equipo.nombre, equipo.descripcion, equipo.codigoProducto, equipo.id_categoria, id], (err, res) => {
    //     if (err) {
    //         console.log("Error actualizando equipo:", err);
    //         result(null, err);
    //         return;
    //     }
    //     if (res.affectedRows == 0) {
    //         // No se encontró un equipo con ese ID
    //         result({ kind: "not_found" }, null);
    //         return;
    //     }
    //     console.log("Equipo actualizado:", { id: id, ...equipo });
    //     result(null, { id: id, ...equipo });
    // });
    // Simulando una respuesta exitosa
    result(null, { id: id, ...equipo });
};

// Eliminar un equipo por ID
Equipos.remove = (id, result) => {
    const query = `DELETE FROM equipos WHERE id_equipo = ?`;
    console.log(`Executing query: ${query}`);
    console.log(`With ID: ${id}`);
    // db.query(query, id, (err, res) => {
    //     if (err) {
    //         console.log("Error eliminando equipo:", err);
    //         result(null, err);
    //         return;
    //     }
    //     if (res.affectedRows == 0) {
    //         // No se encontró un equipo con ese ID
    //         result({ kind: "not_found" }, null);
    //         return;
    //     }
    //     console.log("Equipo eliminado con ID:", id);
    //     result(null, res);
    // });
    // Simulando una respuesta exitosa
    result(null, { affectedRows: 1 });
};

module.exports = Equipos;
