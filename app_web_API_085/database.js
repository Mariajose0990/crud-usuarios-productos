const mongoose = require('mongoose');

mongoose.connect("mongodb://machadoimbrett17_db_user:2APUfeiYMq2PVjfl@ac-rnlvvba-shard-00-00.amggxqe.mongodb.net:27017,ac-rnlvvba-shard-00-01.amggxqe.mongodb.net:27017,ac-rnlvvba-shard-00-02.amggxqe.mongodb.net:27017/app_sena?ssl=true&replicaSet=atlas-uh2zyv-shard-0&authSource=admin&appName=Admin")
.then(() => console.log("Conectado a MongoDB Atlas"))
.catch(err => console.log("Error de conexión:", err));
