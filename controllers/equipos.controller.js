// Importamos la conexión a la BD
const db = require('../services/db.service');

// Obtener todos los equipos
exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM equipos');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los equipos', error: error.message });
  }
};

// Obtener un equipo por ID
exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query('SELECT * FROM equipos WHERE id = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Equipo no encontrado' });
    }

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el equipo', error: error.message });
  }
};

// Crear un nuevo equipo
exports.create = async (req, res) => {
  try {
    const { nombre, marca, modelo, serie, id_centro_costo } = req.body;

    // Validar datos obligatorios
    if (!nombre || !marca || !modelo || !serie || !id_centro_costo) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const [result] = await db.query(
      'INSERT INTO equipos (nombre, marca, modelo, serie, id_centro_costo) VALUES (?, ?, ?, ?, ?)',
      [nombre, marca, modelo, serie, id_centro_costo]
    );

    res.status(201).json({
      id: result.insertId,
      nombre,
      marca,
      modelo,
      serie,
      id_centro_costo
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el equipo', error: error.message });
  }
};

// Actualizar un equipo
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, marca, modelo, serie, id_centro_costo } = req.body;

    // Validar datos obligatorios
    if (!nombre || !marca || !modelo || !serie || !id_centro_costo) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const [result] = await db.query(
      'UPDATE equipos SET nombre = ?, marca = ?, modelo = ?, serie = ?, id_centro_costo = ? WHERE id = ?',
      [nombre, marca, modelo, serie, id_centro_costo, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Equipo no encontrado' });
    }

    res.json({ id, nombre, marca, modelo, serie, id_centro_costo });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el equipo', error: error.message });
  }
};

// Eliminar un equipo
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await db.query('DELETE FROM equipos WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Equipo no encontrado' });
    }

    res.json({ message: 'Equipo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el equipo', error: error.message });
  }
};
