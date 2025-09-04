const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'tu_password',
  database: 'tu_base_datos'
});

module.exports = db;
        return res.status(404).json({ message: 'Centro de costos no encontrado' });