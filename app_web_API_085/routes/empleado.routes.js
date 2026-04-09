/**
 * Vamos a crear rutas del servidor
 * creamos un módulo por eso utilizamos express
 * vamos a utilizar como nuestra rest api para 
 * enviar y recibir datos en formato json
 */

 //const express = require('express');//
 //const router = express.Router();
 /* generamos un ejemplo cuando le soliciten 
 algo al servidor por el método GET **/  
 /*router.get('/', (req, res) => {  
                                
    res.json({
         status: 'API REST funcionando'
     });
 })  
 module.exports = router;
 */

//***********************************************************//

 /*creamos un módulo por eso utilizamos express

*/

const express = require('express');

const router = express.Router();

const empleadoCtrl = require('../controllers/empleado.controller');

router.get('/', empleadoCtrl.getEmpleados); // Rutas más limpias (obtener empleados)

router.post('/', empleadoCtrl.createEmpleados);//guardar

router.get('/:id', empleadoCtrl.getUnicoEmpleado);// obtiene un único empleado

router.put('/:id',empleadoCtrl.editarEmpleado); //Actualizar datos (uno a la vez)

router.delete('/:id', empleadoCtrl.eliminarEmpleado); //Eliminar empleado

module.exports = router;
 
