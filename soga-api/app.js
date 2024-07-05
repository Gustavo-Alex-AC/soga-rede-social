// app.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors package
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const port = 3001;
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Update this to match your frontend origin
    methods: ["GET", "POST"]
  }
});


// Configurar middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3001", // Replace with your frontend origin
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Importar as rotas
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");
const comentarioRoutes = require("./routes/comentarios");
const curtidaRoutes = require("./routes/curtidas");
const clubRoutes = require("./routes/clubs");
const eventoRoutes = require("./routes/eventos");
const clubMembrosRoutes = require("./routes/clubMembros");
const eventoParticipanteRoutes = require("./routes/eventoParticipantes");
const mensagensRoutes = require("./routes/mensagens");
const notificacaosRoutes = require("./routes/notificacaos");
const relacionamentosRoutes = require("./routes/relacionamentos");

// Usar as rotas
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/comentarios", comentarioRoutes);
app.use("/api/curtidas", curtidaRoutes);
app.use("/api/clubs", clubRoutes);
app.use("/api/clubMembros", clubMembrosRoutes);
app.use("/api/eventos", eventoRoutes);
app.use("/api/eventoParticipantes", eventoParticipanteRoutes);
app.use("/api/mensagens", mensagensRoutes);
app.use("/api/notificacaos", notificacaosRoutes);
app.use("/api/relacionamentos", relacionamentosRoutes);

// Configurar o Socket.io
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('set_username', (username) => {
    socket.data.username = username;
  });

  socket.on('mensagem', (text) => {
    const message = {
      text,
      authorId: socket.id,
      author: socket.data.username || 'Anon'
    };
    io.emit('recive_message', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});


// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
