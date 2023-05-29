const express = require('express');
const dotenv = require('dotenv');
const { chats } = require('./data/data');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes')

dotenv.config()
connectDB();
const app = express();
dotenv.config();

//MIDLEWARES
app.use(express.static("public"))
app.use(express.json())

app.use('/api/user', userRoutes)
app.get('/', (req, res) => {
  res.send("La API funciona con éxito");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

// Ruta para recibir un ID específico
app.get("/api/chat/:id", (req, res) => {
  const chatId = req.params.id;
  //console.log(chatId);
  const chat = chats.find(chat => chat._id === chatId);

  if (chat) {
    res.send(chat);
  } else {
    res.status(404).send("Chat no encontrado");
  }


});


const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server started on PORT ${PORT}`));
