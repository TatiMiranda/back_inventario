const express = require("express");
const cors = require("cors");
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const userRoutes = require("./routes/user.routes.js");
const centroCostosRoutes = require("./routes/CentroCostos.routes.js");
const seguimientoRoutes = require("./routes/seguimiento.routes.js");
const equiposRoutes = require("./routes/equipos.routes.js");
const sedesRoutes = require("./routes/sedes.routes.js");
const proveedorRoutes = require("./routes/provedor.routes.js");
const authRoutes = require("./routes/auth.routes.js");

// Prefijo /api
app.use("/api/usuarios", userRoutes);
app.use("/api/centro-costos", centroCostosRoutes);
app.use("/api/seguimiento", seguimientoRoutes);
app.use("/api/equipos", equiposRoutes);
app.use("/api/sedes", sedesRoutes);
app.use("/api/proveedores", proveedorRoutes);
app.use("/api/auth", authRoutes);

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
