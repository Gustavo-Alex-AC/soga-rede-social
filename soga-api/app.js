// app.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors package
const app = express();
const port = 3000;
const http = require("http");
const socketIo = require("socket.io");

const sequelize = require("./config/database");
const User = require("./models/user");
const Mensagem = require("./models/mensagem");
const { timeStamp } = require("console");

// Configurar middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
// app.use(
//   cors({
//     origin: "http://localhost:3001", // Replace with your frontend origin
//   })
// );
// Enable CORS for all origins
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// sockets - messagem

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

// Sequelize synchronization
(async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );

    await sequelize.sync(); // Sync models with database

    server.listen(3002, () => {
      console.log("Server is running on http://localhost:3002");
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

// Socket.IO event handling
io.on("connection", (socket) => {
  console.log("User connected");

  const loadMessages = async () => {
    try {
      const messages = await Mensagem.findAll({
        order: [["created_at", "ASC"]],
        include: [
          { model: User, as: "sender" },
          { model: User, as: "receiver" },
        ],
      });
      socket.emit("mensagem", messages); // Emitting "mensagem" event to the client
    } catch (err) {
      console.log(err);
    }
  };
  loadMessages();

  socket.on("newMessage", async (msg) => {
    try {
      const newMessage = await Mensagem.create(msg);
      const savedMessage = await Mensagem.findByPk(newMessage.id, {
        include: [
          { model: User, as: "sender" },
          { model: User, as: "receiver" },
        ],
      });
      io.emit("message", savedMessage); // Broadcasting "message" event to all clients
    } catch (err) {
      console.log(err);
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

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

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
