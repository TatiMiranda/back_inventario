const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken"); // Para generar tokens de sesión

const app = express();
const PORT = 3000;
const SECRET = "clave_secreta_super_segura";

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Ruta de login
app.post("/login", (req, res) => {
  const { usuario, password } = req.body;

  // 🔹 Aquí deberías validar contra tu base de datos
  if (usuario === "admin" && password === "1234") {
    // Generar token
    const token = jwt.sign({ usuario }, SECRET, { expiresIn: "1h" });
    return res.json({ token });
  }

  res.status(401).json({ mensaje: "Credenciales incorrectas" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
