const mongoose = require("mongoose");
require('dotenv').config(); // Agrega esta línea para cargar las variables de entorno

const connectDB = async () => {
  try {
    //console.log(process.env.MONGO_URL);

    // Conexión a la base de datos distribuida
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //replicaSet: 'ac-dz44rsf-shard-00-02.dccsv0n.mongodb.net:27017',
      readPreference: 'nearest',
    })

    // Conexión exitosa con la base de datos
    console.log(`MongoDB Conectado: conexión exitosa con la base de datos!!`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;