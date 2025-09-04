const express = require('express');
const app = express();

// Middleware para leer JSON
app.use(express.json());

// Importar rutas
const equiposRoutes = require('./routes/equipos.routes');
const centroCostosRoutes = require('./routes/CentroCostos.routes'); 
const authRoutes = require('./routes/auth.routes');
const proveedorRoutes = require('./routes/proveedor.routes');
const sedeRoutes = require('./routes/sede.routes');
const seguimientoRoutes = require('./routes/seguimiento.routes');
const userRoutes = require('./routes/user.routes');

// Usar rutas con prefijos
app.use('/api/equipos', equiposRoutes);
app.use('/api/centro_costos', centroCostosRoutes); 
app.use('/api/auth', authRoutes);
app.use('/api/proveedores', proveedorRoutes);
app.use('/api/sedes', sedeRoutes);
app.use('/api/seguimiento', seguimientoRoutes);
app.use('/api/users', userRoutes);



// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

require('dotenv').config();
const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

module.exports = db;

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});
