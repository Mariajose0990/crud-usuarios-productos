app_web_node/
│
├── backend/                        # Servidor con Node.js + Express + MongoDB
│   ├── controllers/
│   │   └── empleado.controller.js   # Lógica de negocio de empleados
│   ├── models/
│   │   └── empleado.js              # Esquema de Mongoose
│   ├── routes/
│   │   └── empleado.route.js        # Rutas REST del recurso empleado
│   ├── database.js                  # Conexión a MongoDB
│   └── index.js                     # Punto de entrada del servidor
