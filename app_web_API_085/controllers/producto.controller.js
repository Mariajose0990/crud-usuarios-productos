const Producto = require("../models/producto");
const productoCtrl = {};

// Obtener un producto 
productoCtrl.getProducto = async (req, res) => {
  const producto = await Producto.find();
  res.json(producto);
};

//crear un producto
productoCtrl.createProducto = async (req, res) => {
  const nuevoProducto = new Producto(req.body);
  await nuevoProducto.save();
  res.json({ mensaje: "Producto creado", data: nuevoProducto });
};

//Conseguir un único producto
 productoCtrl.getUnicoProducto = async (req, res) => {     
     const productoUnico = await Producto.findById(req.params.id); 
     res.json(productoUnico);}

//Actualizar producto
productoCtrl.editarProducto = async (req, res) =>  {
     const { id } = req.params; 
     const productoEdit = {  
         nombre: req.body.nombre,
         precio: req.body.precio,
         stock: req.body.stock
          };
              await Producto.findByIdAndUpdate(id, {$set: productoEdit}, {new:  true}); 
              res.json({status: 'Producto Actualizado'});
          }

// Eliminar producto 
 productoCtrl.eliminarProducto = async (req, res) => {
     await Producto.findByIdAndDelete(req.params.id);
     res.json({status: 'Producto Eliminado'});
 };  

 module.exports = productoCtrl;
