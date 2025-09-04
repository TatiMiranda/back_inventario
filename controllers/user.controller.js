// controllers/user.controller.js
const db = require('../services/db.service');
const User = require('../models/user.models');
const bcrypt = require('bcryptjs');

// Obtener todos los usuarios
exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query(User.getAll);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los usuarios', error: error.message });
  }
};

// Obtener usuario por ID
exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query(User.getById, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el usuario', error: error.message });
  }
};

// Crear nuevo usuario
exports.create = async (req, res) => {
  try {
    const { nombre, email, password, rol } = req.body;

    if (!nombre || !email || !password || !rol) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await db.query(User.create, [nombre, email, hashedPassword, rol]);

    res.status(201).json({
      id: result.insertId,
      nombre,
      email,
      rol
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el usuario', error: error.message });
  }
};

// Actualizar usuario
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, email, password, rol } = req.body;

    if (!nombre || !email || !rol) {
      return res.status(400).json({ message: 'Nombre, email y rol son obligatorios' });
    }

    let hashedPassword;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    } else {
      const [existing] = await db.query('SELECT password FROM users WHERE id = ?', [id]);
      if (existing.length === 0) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      hashedPassword = existing[0].password;
    }

    const [result] = await db.query(User.update, [nombre, email, hashedPassword, rol, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json({ id, nombre, email, rol });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el usuario', error: error.message });
  }
};

// Eliminar usuario
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await db.query(User.delete, [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el usuario', error: error.message });
  }
};
