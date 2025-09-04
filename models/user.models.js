// models/user.models.js
// Consultas SQL para la tabla users

const User = {
  getAll: 'SELECT id, nombre, email, rol FROM users', // No devolver password por seguridad
  getById: 'SELECT id, nombre, email, rol FROM users WHERE id = ?',
  getByEmail: 'SELECT * FROM users WHERE email = ?', // para login
  create: 'INSERT INTO users (nombre, email, password, rol) VALUES (?, ?, ?, ?)',
  update: 'UPDATE users SET nombre = ?, email = ?, password = ?, rol = ? WHERE id = ?',
  delete: 'DELETE FROM users WHERE id = ?'
};

module.exports = User;
