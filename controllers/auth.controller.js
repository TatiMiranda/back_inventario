// Importa el modelo de usuario para interactuar con la base de datos
const User = require('../models/user.model'); 
// Importa bcrypt para encriptar contraseñas
const bcrypt = require('bcryptjs'); 
// Importa jsonwebtoken para crear y verificar tokens
const jwt = require('jsonwebtoken');