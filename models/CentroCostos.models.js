// Este archivo representa el modelo para la tabla `centro_costos`.
// Contiene las funciones para interactuar directamente con la base de datos.

// Asume que tienes una conexión a la base de datos (por ejemplo, 'db') disponible.
const db = require('../config/db.config'); // Debes ajustar esta ruta.

const CentroCostos = function(centroCosto) {
    this.nombre = centroCosto.nombre;
    this.id_sede = centroCosto.id_sede;
    this.id_equipo = centroCosto.id_equipo;
    this.id_seguimiento = centroCosto.id_seguimiento;
};

// Crear un nuevo centro de costos
CentroCostos.create = (newCentroCosto, result) => {
    // Usamos un placeholder para la conexión a la base de datos.
    // Reemplaza esto con tu lógica de inserción.
    const query = `INSERT INTO centro_costos SET ?`;
    console.log(`Executing query: ${query}`);
    console.log(`With data: ${JSON.stringify(newCentroCosto)}`);
    // db.query(query, newCentroCosto, (err, res) => {
    //     if (err) {
    //         console.log("Error creando centro de costos:", err);
    //         result(err, null);
    //         return;
    //     }
    //     console.log("Centro de costos creado:", { id: res.insertId, ...newCentroCosto });
    //     result(null, { id: res.insertId, ...newCentroCosto });
    // });
    // Simulando una respuesta exitosa
    result(null, { id: 1, ...newCentroCosto });
};

// Encontrar un centro de costos por ID
CentroCostos.findById = (centroCostoId, result) => {
    const query = `SELECT * FROM centro_costos WHERE id_centroCostos = ?`;
    console.log(`Executing query: ${query}`);
    console.log(`With ID: ${centroCostoId}`);
    // db.query(query, centroCostoId, (err, res) => {
    //     if (err) {
    //         console.log("Error encontrando centro de costos:", err);
    //         result(err, null);
    //         return;
    //     }
    //     if (res.length) {
    //         console.log("Centro de costos encontrado:", res[0]);
    //         result(null, res[0]);
    //         return;
    //     }
    //     // No se encontró un centro de costos con ese ID
    //     result({ kind: "not_found" }, null);
    // });
    // Simulando una respuesta exitosa
    result(null, { id_centroCostos: centroCostoId, nombre: "Centro 1", id_sede: "sedeA", id_equipo: 1, id_seguimiento: 1 });
};

// Obtener todos los centros de costos
CentroCostos.getAll = (result) => {
    const query = `SELECT * FROM centro_costos`;
    console.log(`Executing query: ${query}`);
    // db.query(query, (err, res) => {
    //     if (err) {
    //         console.log("Error recuperando centros de costos:", err);
    //         result(null, err);
    //         return;
    //     }
    //     console.log("Centros de costos:", res);
    //     result(null, res);
    // });
    // Simulando una respuesta exitosa
    result(null, [
        { id_centroCostos: 1, nombre: "Centro 1", id_sede: "sedeA", id_equipo: 1, id_seguimiento: 1 },
        { id_centroCostos: 2, nombre: "Centro 2", id_sede: "sedeB", id_equipo: 2, id_seguimiento: 2 }
    ]);
};

// Actualizar un centro de costos por ID
CentroCostos.updateById = (id, centroCosto, result) => {
    const query = `UPDATE centro_costos SET nombre = ?, id_sede = ?, id_equipo = ?, id_seguimiento = ? WHERE id_centroCostos = ?`;
    console.log(`Executing query: ${query}`);
    console.log(`With data: ${JSON.stringify(centroCosto)}`);
    // db.query(query, [centroCosto.nombre, centroCosto.id_sede, centroCosto.id_equipo, centroCosto.id_seguimiento, id], (err, res) => {
    //     if (err) {
    //         console.log("Error actualizando centro de costos:", err);
    //         result(null, err);
    //         return;
    //     }
    //     if (res.affectedRows == 0) {
    //         // No se encontró un centro de costos con ese ID
    //         result({ kind: "not_found" }, null);
    //         return;
    //     }
    //     console.log("Centro de costos actualizado:", { id: id, ...centroCosto });
    //     result(null, { id: id, ...centroCosto });
    // });
    // Simulando una respuesta exitosa
    result(null, { id: id, ...centroCosto });
};

// Eliminar un centro de costos por ID
CentroCostos.remove = (id, result) => {
    const query = `DELETE FROM centro_costos WHERE id_centroCostos = ?`;
    console.log(`Executing query: ${query}`);
    console.log(`With ID: ${id}`);
    // db.query(query, id, (err, res) => {
    //     if (err) {
    //         console.log("Error eliminando centro de costos:", err);
    //         result(null, err);
    //         return;
    //     }
    //     if (res.affectedRows == 0) {
    //         // No se encontró un centro de costos con ese ID
    //         result({ kind: "not_found" }, null);
    //         return;
    //     }
    //     console.log("Centro de costos eliminado con ID:", id);
    //     result(null, res);
    // });
    // Simulando una respuesta exitosa
    result(null, { affectedRows: 1 });
};

module.exports = CentroCostos;
