// controllers/sede.controller.js
const db = require('../services/db.service');
const Sede = require('../models/sede.models');

// Obtener todas las sedes
exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query(Sede.getAll);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las sedes', error: error.message });
  }
};

// Obtener sede por ID
exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query(Sede.getById, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Sede no encontrada' });
    }

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la sede', error: error.message });
  }
};

// Crear nueva sede
exports.create = async (req, res) => {
  try {
    const { nombre, direccion, telefono } = req.body;

    if (!nombre || !direccion || !telefono) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const [result] = await db.query(Sede.create, [nombre, direccion, telefono]);

    res.status(201).json({
      id: result.insertId,
      nombre,
      direccion,
      telefono
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la sede', error: error.message });
  }
};

// Actualizar sede
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, direccion, telefono } = req.body;

    if (!nombre || !direccion || !telefono) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const [result] = await db.query(Sede.update, [nombre, direccion, telefono, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Sede no encontrada' });
    }

    res.json({ id, nombre, direccion, telefono });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la sede', error: error.message });
  }
};

// Eliminar sede
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await db.query(Sede.delete, [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Sede no encontrada' });
    }

    res.json({ message: 'Sede eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la sede', error: error.message });
  }
};
