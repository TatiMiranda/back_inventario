// Este archivo representa el modelo para la tabla `proveedores`.
// Contiene las funciones para interactuar directamente con la base de datos.

// Asume que tienes una conexión a la base de datos (por ejemplo, 'db') disponible.
// const db = require('../config/db.config'); // Debes ajustar esta ruta.

const Proveedores = function(proveedor) {
    this.nombre = proveedor.nombre;
    this.equipos_proveidos = proveedor.equipos_proveidos;
    this.stock_proveido = proveedor.stock_proveido;
};

// Crear un nuevo proveedor
Proveedores.create = (newProveedor, result) => {
    // Usamos un placeholder para la conexión a la base de datos.
    // Reemplaza esto con tu lógica de inserción.
    const query = `INSERT INTO proveedores SET ?`;
    console.log(`Executing query: ${query}`);
    console.log(`With data: ${JSON.stringify(newProveedor)}`);
    // db.query(query, newProveedor, (err, res) => {
    //     if (err) {
    //         console.log("Error creando proveedor:", err);
    //         result(err, null);
    //         return;
    //     }
    //     console.log("Proveedor creado:", { id: res.insertId, ...newProveedor });
    //     result(null, { id: res.insertId, ...newProveedor });
    // });
    // Simulando una respuesta exitosa
    result(null, { id: 1, ...newProveedor });
};

// Encontrar un proveedor por ID
Proveedores.findById = (proveedorId, result) => {
    const query = `SELECT * FROM proveedores WHERE id_proveedor = ?`;
    console.log(`Executing query: ${query}`);
    console.log(`With ID: ${proveedorId}`);
    // db.query(query, proveedorId, (err, res) => {
    //     if (err) {
    //         console.log("Error encontrando proveedor:", err);
    //         result(err, null);
    //         return;
    //     }
    //     if (res.length) {
    //         console.log("Proveedor encontrado:", res[0]);
    //         result(null, res[0]);
    //         return;
    //     }
    //     // No se encontró un proveedor con ese ID
    //     result({ kind: "not_found" }, null);
    // });
    // Simulando una respuesta exitosa
    result(null, { id_proveedor: proveedorId, nombre: "Proveedor A", equipos_proveidos: "LT-001", stock_proveido: 50 });
};

// Obtener todos los proveedores
Proveedores.getAll = (result) => {
    const query = `SELECT * FROM proveedores`;
    console.log(`Executing query: ${query}`);
    // db.query(query, (err, res) => {
    //     if (err) {
    //         console.log("Error recuperando proveedores:", err);
    //         result(null, err);
    //         return;
    //     }
    //     console.log("Proveedores:", res);
    //     result(null, res);
    // });
    // Simulando una respuesta exitosa
    result(null, [
        { id_proveedor: 1, nombre: "Proveedor A", equipos_proveidos: "LT-001", stock_proveido: 50 },
        { id_proveedor: 2, nombre: "Proveedor B", equipos_proveidos: "MS-002", stock_proveido: 100 }
    ]);
};

// Actualizar un proveedor por ID
Proveedores.updateById = (id, proveedor, result) => {
    const query = `UPDATE proveedores SET nombre = ?, equipos_proveidos = ?, stock_proveido = ? WHERE id_proveedor = ?`;
    console.log(`Executing query: ${query}`);
    console.log(`With data: ${JSON.stringify(proveedor)}`);
    // db.query(query, [proveedor.nombre, proveedor.equipos_proveidos, proveedor.stock_proveido, id], (err, res) => {
    //     if (err) {
    //         console.log("Error actualizando proveedor:", err);
    //         result(null, err);
    //         return;
    //     }
    //     if (res.affectedRows == 0) {
    //         // No se encontró un proveedor con ese ID
    //         result({ kind: "not_found" }, null);
    //         return;
    //     }
    //     console.log("Proveedor actualizado:", { id: id, ...proveedor });
    //     result(null, { id: id, ...proveedor });
    // });
    // Simulando una respuesta exitosa
    result(null, { id: id, ...proveedor });
};

// Eliminar un proveedor por ID
Proveedores.remove = (id, result) => {
    const query = `DELETE FROM proveedores WHERE id_proveedor = ?`;
    console.log(`Executing query: ${query}`);
    console.log(`With ID: ${id}`);
    // db.query(query, id, (err, res) => {
    //     if (err) {
    //         console.log("Error eliminando proveedor:", err);
    //         result(null, err);
    //         return;
    //     }
    //     if (res.affectedRows == 0) {
    //         // No se encontró un proveedor con ese ID
    //         result({ kind: "not_found" }, null);
    //         return;
    //     }
    //     console.log("Proveedor eliminado con ID:", id);
    //     result(null, res);
    // });
    // Simulando una respuesta exitosa
    result(null, { affectedRows: 1 });
};

module.exports = Proveedores;
