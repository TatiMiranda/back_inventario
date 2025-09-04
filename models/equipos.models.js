const db = require('../services/db.service');

// Obtener todos los equipos
async function getAll() {
  const [rows] = await db.query('SELECT * FROM equipos');
  return rows;
}

// Obtener un equipo por ID
async function getById(id) {
  const [rows] = await db.query('SELECT * FROM equipos WHERE id = ?', [id]);
  return rows[0];
}

// Crear un nuevo equipo
async function create(data) {
  const { nombre, marca, modelo, serie, id_centro_costo } = data;
  const [result] = await db.query(
    'INSERT INTO equipos (nombre, marca, modelo, serie, id_centro_costo) VALUES (?, ?, ?, ?, ?)',
    [nombre, marca, modelo, serie, id_centro_costo]
  );
  return { id: result.insertId, ...data };
}

// Actualizar un equipo
async function update(id, data) {
  const { nombre, marca, modelo, serie, id_centro_costo } = data;
  const [result] = await db.query(
    'UPDATE equipos SET nombre = ?, marca = ?, modelo = ?, serie = ?, id_centro_costo = ? WHERE id = ?',
    [nombre, marca, modelo, serie, id_centro_costo, id]
  );
  return result.affectedRows;
}

// Eliminar un equipo
async function remove(id) {
  const [result] = await db.query('DELETE FROM equipos WHERE id = ?', [id]);
  return result.affectedRows;
}

module.exports = { getAll, getById, create, update, remove };
