// Este archivo representa el modelo para la tabla `seguimiento`.
// Contiene las funciones para interactuar directamente con la base de datos.

// Asume que tienes una conexión a la base de datos (por ejemplo, 'db') disponible.
// const db = require('../config/db.config'); // Debes ajustar esta ruta.

const Seguimiento = function(movimiento) {
    this.id_equipo = movimiento.id_equipo;
    this.cantidad = movimiento.cantidad;
    this.tipo_movimiento = movimiento.tipo_movimiento;
    this.id_sede_origen = movimiento.id_sede_origen;
    this.id_sede_destino = movimiento.id_sede_destino;
};

// Crear un nuevo movimiento de seguimiento
Seguimiento.create = (newMovimiento, result) => {
    // Usamos un placeholder para la conexión a la base de datos.
    // Reemplaza esto con tu lógica de inserción.
    const query = `INSERT INTO seguimiento SET ?`;
    console.log(`Executing query: ${query}`);
    console.log(`With data: ${JSON.stringify(newMovimiento)}`);
    // db.query(query, newMovimiento, (err, res) => {
    //     if (err) {
    //         console.log("Error creando movimiento de seguimiento:", err);
    //         result(err, null);
    //         return;
    //     }
    //     console.log("Movimiento de seguimiento creado:", { id: res.insertId, ...newMovimiento });
    //     result(null, { id: res.insertId, ...newMovimiento });
    // });
    // Simulando una respuesta exitosa
    result(null, { id: 1, ...newMovimiento });
};

// Encontrar un movimiento por ID
Seguimiento.findById = (movimientoId, result) => {
    const query = `SELECT * FROM seguimiento WHERE id_movimiento = ?`;
    console.log(`Executing query: ${query}`);
    console.log(`With ID: ${movimientoId}`);
    // db.query(query, movimientoId, (err, res) => {
    //     if (err) {
    //         console.log("Error encontrando movimiento:", err);
    //         result(err, null);
    //         return;
    //     }
    //     if (res.length) {
    //         console.log("Movimiento encontrado:", res[0]);
    //         result(null, res[0]);
    //         return;
    //     }
    //     // No se encontró un movimiento con ese ID
    //     result({ kind: "not_found" }, null);
    // });
    // Simulando una respuesta exitosa
    result(null, { id_movimiento: movimientoId, id_equipo: 1, cantidad: 10, tipo_movimiento: "entrada", fecha: new Date(), id_sede_origen: "sedeA", id_sede_destino: null });
};

// Obtener todos los movimientos
Seguimiento.getAll = (result) => {
    const query = `SELECT * FROM seguimiento`;
    console.log(`Executing query: ${query}`);
    // db.query(query, (err, res) => {
    //     if (err) {
    //         console.log("Error recuperando movimientos:", err);
    //         result(null, err);
    //         return;
    //     }
    //     console.log("Movimientos:", res);
    //     result(null, res);
    // });
    // Simulando una respuesta exitosa
    result(null, [
        { id_movimiento: 1, id_equipo: 1, cantidad: 10, tipo_movimiento: "entrada", fecha: new Date(), id_sede_origen: "sedeA", id_sede_destino: null },
        { id_movimiento: 2, id_equipo: 2, cantidad: 5, tipo_movimiento: "salida", fecha: new Date(), id_sede_origen: null, id_sede_destino: "sedeB" }
    ]);
};

// Actualizar un movimiento por ID
Seguimiento.updateById = (id, movimiento, result) => {
    const query = `UPDATE seguimiento SET id_equipo = ?, cantidad = ?, tipo_movimiento = ?, id_sede_origen = ?, id_sede_destino = ? WHERE id_movimiento = ?`;
    console.log(`Executing query: ${query}`);
    console.log(`With data: ${JSON.stringify(movimiento)}`);
    // db.query(query, [movimiento.id_equipo, movimiento.cantidad, movimiento.tipo_movimiento, movimiento.id_sede_origen, movimiento.id_sede_destino, id], (err, res) => {
    //     if (err) {
    //         console.log("Error actualizando movimiento:", err);
    //         result(null, err);
    //         return;
    //     }
    //     if (res.affectedRows == 0) {
    //         // No se encontró un movimiento con ese ID
    //         result({ kind: "not_found" }, null);
    //         return;
    //     }
    //     console.log("Movimiento actualizado:", { id: id, ...movimiento });
    //     result(null, { id: id, ...movimiento });
    // });
    // Simulando una respuesta exitosa
    result(null, { id: id, ...movimiento });
};

// Eliminar un movimiento por ID
Seguimiento.remove = (id, result) => {
    const query = `DELETE FROM seguimiento WHERE id_movimiento = ?`;
    console.log(`Executing query: ${query}`);
    console.log(`With ID: ${id}`);
    // db.query(query, id, (err, res) => {
    //     if (err) {
    //         console.log("Error eliminando movimiento:", err);
    //         result(null, err);
    //         return;
    //     }
    //     if (res.affectedRows == 0) {
    //         // No se encontró un movimiento con ese ID
    //         result({ kind: "not_found" }, null);
    //         return;
    //     }
    //     console.log("Movimiento eliminado con ID:", id);
    //     result(null, res);
    // });
    // Simulando una respuesta exitosa
    result(null, { affectedRows: 1 });
};

module.exports = Seguimiento;
