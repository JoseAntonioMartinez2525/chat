const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { chats } = require('./data/data');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes')

dotenv.config()
connectDB();
const app = express();
// Habilitar CORS
app.use(cors());

dotenv.config();

//MIDLEWARES
app.use(express.static("public"))
app.use(express.json())

app.use('/api/user', userRoutes)

// Ruta para crear un nuevo usuario
app.post('/api/user', async (req, res) => {
  try {
    const { name, email, password, pic } = req.body;

    // Crear un nuevo usuario con los datos recibidos
    const newUser = new User({
      name,
      email,
      password,
      pic,
    });
        // Guardar el nuevo usuario en la base de datos
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

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

app.post('/api/user', async (req, res) => {
  try {
    const { name, email, password, pic } = req.body;

    const newUser = new User({
      name,
      email,
      password,
      pic,
    });

    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server started on PORT ${PORT}`));
