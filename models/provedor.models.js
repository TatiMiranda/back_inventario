// models/proveedor.models.js
// Definimos las consultas SQL para la tabla proveedor

const Proveedor = {
  getAll: 'SELECT * FROM proveedores',
  getById: 'SELECT * FROM proveedores WHERE id = ?',
  create: 'INSERT INTO proveedores (nombre, contacto, telefono, direccion) VALUES (?, ?, ?, ?)',
  update: 'UPDATE proveedores SET nombre = ?, contacto = ?, telefono = ?, direccion = ? WHERE id = ?',
  delete: 'DELETE FROM proveedores WHERE id = ?'
};

module.exports = Proveedor;
