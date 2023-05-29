const mongoose = require("mongoose");
require('dotenv').config(); // Agrega esta línea para cargar las variables de entorno

const connectDB = async () => {
  try {
    //console.log(process.env.MONGO_URL);

    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    //conexión exitosa con la base de datos conn.connection.host
    console.log(`MongoDB Conectado: conexión exitosa con la base de datos!!`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
