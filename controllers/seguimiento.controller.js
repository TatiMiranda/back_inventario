// controllers/seguimiento.controller.js
const db = require('../services/db.service');
const Seguimiento = require('../models/seguimiento.models');

// Obtener todos los seguimientos
exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query(Seguimiento.getAll);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los seguimientos', error: error.message });
  }
};

// Obtener seguimiento por ID
exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query(Seguimiento.getById, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Seguimiento no encontrado' });
    }

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el seguimiento', error: error.message });
  }
};

// Crear nuevo seguimiento
exports.create = async (req, res) => {
  try {
    const { id_equipo, fecha, observacion, estado } = req.body;

    if (!id_equipo || !fecha || !observacion || !estado) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const [result] = await db.query(Seguimiento.create, [id_equipo, fecha, observacion, estado]);

    res.status(201).json({
      id: result.insertId,
      id_equipo,
      fecha,
      observacion,
      estado
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el seguimiento', error: error.message });
  }
};

// Actualizar seguimiento
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_equipo, fecha, observacion, estado } = req.body;

    if (!id_equipo || !fecha || !observacion || !estado) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const [result] = await db.query(Seguimiento.update, [id_equipo, fecha, observacion, estado, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Seguimiento no encontrado' });
    }

    res.json({ id, id_equipo, fecha, observacion, estado });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el seguimiento', error: error.message });
  }
};

// Eliminar seguimiento
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await db.query(Seguimiento.delete, [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Seguimiento no encontrado' });
    }

    res.json({ message: 'Seguimiento eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el seguimiento', error: error.message });
  }
};
