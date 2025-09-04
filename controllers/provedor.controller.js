// controllers/proveedor.controller.js
const db = require('../services/db.service');
const Proveedor = require('../models/proveedor.models');

// Obtener todos los proveedores
exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query(Proveedor.getAll);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los proveedores', error: error.message });
  }
};

// Obtener proveedor por ID
exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query(Proveedor.getById, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el proveedor', error: error.message });
  }
};

// Crear un nuevo proveedor
exports.create = async (req, res) => {
  try {
    const { nombre, contacto, telefono, direccion } = req.body;

    if (!nombre || !contacto || !telefono || !direccion) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const [result] = await db.query(Proveedor.create, [nombre, contacto, telefono, direccion]);

    res.status(201).json({
      id: result.insertId,
      nombre,
      contacto,
      telefono,
      direccion
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el proveedor', error: error.message });
  }
};

// Actualizar un proveedor
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, contacto, telefono, direccion } = req.body;

    if (!nombre || !contacto || !telefono || !direccion) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const [result] = await db.query(Proveedor.update, [nombre, contacto, telefono, direccion, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }

    res.json({ id, nombre, contacto, telefono, direccion });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el proveedor', error: error.message });
  }
};

// Eliminar un proveedor
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await db.query(Proveedor.delete, [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }

    res.json({ message: 'Proveedor eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el proveedor', error: error.message });
  }
};
