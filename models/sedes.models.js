// models/sede.models.js
// Consultas SQL para la tabla sedes

const Sede = {
  getAll: 'SELECT * FROM sedes',
  getById: 'SELECT * FROM sedes WHERE id = ?',
  create: 'INSERT INTO sedes (nombre, direccion, telefono) VALUES (?, ?, ?)',
  update: 'UPDATE sedes SET nombre = ?, direccion = ?, telefono = ? WHERE id = ?',
  delete: 'DELETE FROM sedes WHERE id = ?'
};

module.exports = Sede;
