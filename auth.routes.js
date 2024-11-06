// routes/auth.routes.js
import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();
const SECRET_KEY = 'tu_clave_secreta'; // Cambia esto en producción

// MIS DATOS DE USUARIO
const user = {
  id: 1,
  username: 'Sam',
  password: 'sam2024' // No almacenes contraseñas en texto plano
};

// Endpoint de login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Valida las credenciales
  if (username === user.username && password === user.password) {
    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
    return res.json({ token });
  }

  return res.status(401).json({ message: 'Credenciales incorrectas, vuelva a intentar' });
});

export default router;