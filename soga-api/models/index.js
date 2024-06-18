// models/index.js
const sequelize = require("../config/database");
// Importe os modelos aqui
const User = require("./user");
const Post = require("./post");
const Comentario = require("./comentario");
const Curtida = require("./curtida");
const Relacionamento = require("./relacionamento");
const Mensagem = require("./mensagem");
const Club = require("./club");
const ClubMembro = require("./clubMembro");
const Notificacao = require("./notificacao");
const Evento = require("./evento");
const EventoParticipante = require("./eventoParticipante");

// Defina associações
User.hasMany(Post, { foreignKey: "user_id" });
Post.belongsTo(User, { foreignKey: "user_id" });

User.hasMany(Comentario, { foreignKey: "user_id" });
Comentario.belongsTo(User, { foreignKey: "user_id" });

Post.hasMany(Comentario, { foreignKey: "post_id" });
Comentario.belongsTo(Post, { foreignKey: "post_id" });

User.hasMany(Curtida, { foreignKey: "user_id" });
Curtida.belongsTo(User, { foreignKey: "user_id" });

Post.hasMany(Curtida, { foreignKey: "post_id" });
Curtida.belongsTo(Post, { foreignKey: "post_id" });

User.hasMany(Relacionamento, { foreignKey: "user_id" });
User.hasMany(Relacionamento, { foreignKey: "relacao_id" });

Relacionamento.belongsTo(User, { as: "user", foreignKey: "user_id" });
Relacionamento.belongsTo(User, { as: "relacao", foreignKey: "relacao_id" });

// User.belongsToMany(User, {
//   through: Relacionamento,
//   as: "relacoes",
//   foreignKey: "user_id",
//   otherKey: "relacao_id",
// });

User.hasMany(Mensagem, { foreignKey: "sender_id", as: "sentMessages" });
Mensagem.belongsTo(User, { foreignKey: "sender_id", as: "sender" });

User.hasMany(Mensagem, { foreignKey: "receiver_id", as: "receivedMessages" });
Mensagem.belongsTo(User, { foreignKey: "receiver_id", as: "receiver" });

Club.hasMany(ClubMembro, { foreignKey: "club_id" });
ClubMembro.belongsTo(Club, { foreignKey: "club_id" });

User.hasMany(ClubMembro, { foreignKey: "user_id" });
ClubMembro.belongsTo(User, { foreignKey: "user_id" });

User.hasMany(Notificacao, { foreignKey: "user_id" });
Notificacao.belongsTo(User, { foreignKey: "user_id" });

Club.hasMany(Evento, { foreignKey: "club_id" });
Evento.belongsTo(Club, { foreignKey: "club_id" });

Evento.hasMany(EventoParticipante, { foreignKey: "event_id" });
EventoParticipante.belongsTo(Evento, { foreignKey: "event_id" });

User.hasMany(EventoParticipante, { foreignKey: "user_id" });
EventoParticipante.belongsTo(User, { foreignKey: "user_id" });

// Sincronize todos os modelos
// sequelize.sync({ force: true }).then(() => {
//   console.log("Modelos sincronizados com o banco de dados");
// });

sequelize.sync({ force: false }).then(() => {
  console.log("Database synced without dropping tables");
});

module.exports = {
  // Exporte modelos aqui
  User,
  Post,
  Comentario,
  Curtida,
  Relacionamento,
  Mensagem,
  Club,
  ClubMembro,
  Notificacao,
  Evento,
  EventoParticipante,
};
