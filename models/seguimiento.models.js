// models/seguimiento.models.js
// Consultas SQL para la tabla seguimiento

const Seguimiento = {
  getAll: 'SELECT * FROM seguimiento',
  getById: 'SELECT * FROM seguimiento WHERE id = ?',
  create: 'INSERT INTO seguimiento (id_equipo, fecha, observacion, estado) VALUES (?, ?, ?, ?)',
  update: 'UPDATE seguimiento SET id_equipo = ?, fecha = ?, observacion = ?, estado = ? WHERE id = ?',
  delete: 'DELETE FROM seguimiento WHERE id = ?'
};

module.exports = Seguimiento;
