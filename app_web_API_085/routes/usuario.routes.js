//EStas son las rutas para la API usuario

const express = require('express');
const router = express.Router();

const usuarioCtrl = require('../controllers/usuario.controller');

router.get('/', usuarioCtrl.getUsuario); // Rutas más limpias (obtener usuarios)

router.post('/', usuarioCtrl.createUsuario);//guardar

router.get('/:id', usuarioCtrl.getUnicoUsuario);// obtiene un único usuario

router.put('/:id',usuarioCtrl.editarUsuario); //Actualizar datos (uno a la vez)

router.delete('/:id', usuarioCtrl.eliminarUsuario); //Eliminar usuario

module.exports = router;
 