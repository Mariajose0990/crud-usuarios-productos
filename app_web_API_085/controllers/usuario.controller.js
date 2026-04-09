
 const Usuario = require('../models/usuario');
 const bcrypt = require("bcryptjs");
 const usuarioCtrl = {};
 
 /**
  * DEFINO LOS MÉTODOS  */
 
 //Obtener todos los usuarios
 usuarioCtrl.getUsuario = async (req, res) => {
     const usuario = await Usuario.find();
     res.json(usuario);   
}                    
 
 // Crear usuario
 usuarioCtrl.createUsuario = async (req, res) => { 
     const { nombre, correo, contraseña, rol } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(contraseña, salt);

    const nuevoUsuario = new Usuario({ nombre,
    correo,
    contraseña: hash,
    rol});

    await nuevoUsuario.save();    
    res.json({
        'status': 'Usuario guardado'
    });
 }

 //Conseguir un único usuario 
 usuarioCtrl.getUnicoUsuario = async (req, res) => {     
     const usuarioUnico = await Usuario.findById(req.params.id); 
     res.json(usuarioUnico);
 }
 
 //Actualizar usuario
 usuarioCtrl.editarUsuario = async (req, res) =>  {
     const { id } = req.params; 
      const { nombre, correo, contraseña } = req.body;
     const usuarioEdit = {  nombre, correo};

      if (contraseña) {
    const salt = await bcrypt.genSalt(10);
    usuarioEdit.contraseña = await bcrypt.hash(contraseña, salt);
  }
     await Usuario.findByIdAndUpdate(id, {$set: usuarioEdit}, {new:  true}); 
     res.json({status: 'Usuario Actualizado'});
 }

 // Eliminar usuario 
 usuarioCtrl.eliminarUsuario = async (req, res) => {
     await Usuario.findByIdAndDelete(req.params.id);
     res.json({status: 'Usuario Eliminado'});
 };

 module.exports = usuarioCtrl;