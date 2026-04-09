const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');

// Sesión simple en memoria
let usuarioLogueado = null;

const authCtrl = {};

// LOGIN
authCtrl.login = async (req, res) => {
  const { correo, contraseña } = req.body;

  try {
    // Buscar usuario por correo
    const usuario = await Usuario.findOne({ correo });
    if (!usuario) {
      return res.status(404).json({ msg: 'Usuario no existe' });
    }

    console.log('Contraseña guardada en BD:', usuario.contraseña);
    console.log('Contraseña recibida:', contraseña);

    // Comparar contraseña con bcrypt
    const passwordValida = await bcrypt.compare(
      contraseña,
      usuario.contraseña
    );

    if (!passwordValida) {
      return res.status(401).json({ msg: 'Contraseña incorrecta' });
    }

    // Guardar sesión
    usuarioLogueado = {
      id: usuario._id,
      rol: usuario.rol
    };

    res.json({
      msg: 'Login exitoso',
      usuario: {
        id: usuario._id,
        nombre: usuario.nombre,
        correo: usuario.correo,
        rol: usuario.rol
      }
    });

  } catch (error) {
    res.status(500).json({ msg: 'Error al iniciar sesión' });
  }
};

// LOGOUT
authCtrl.logout = (req, res) => {
  usuarioLogueado = null;
  res.json({ msg: 'Sesión cerrada' });
};

// UTILIDAD PARA MIDDLEWARE
authCtrl.getUsuarioLogueado = () => usuarioLogueado;

module.exports = authCtrl;
