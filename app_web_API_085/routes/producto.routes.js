const express = require("express");

const router = express.Router();

const productoCtrl = require("../controllers/producto.controller");
console.log('productoCtrl ->', productoCtrl);

router.get("/",productoCtrl.getProducto); // obtener información del producto 

router.post("/",productoCtrl.createProducto); //crear producto 

router.put('/:id',productoCtrl.editarProducto); //Actualizar datos (uno a la vez)

router.delete('/:id',productoCtrl.eliminarProducto); //Eliminar producto 

module.exports = router;