const { Mensagem, User } = require("../models");
const { Op } = require("sequelize");
const Sequelize = require("sequelize");

exports.sendMessage = async (req, res) => {
  const { sender_id, receiver_id, content } = req.body;
  try {
    const message = await Mensagem.create({ sender_id, receiver_id, content });
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
};

exports.getMessages = async (req, res) => {
  const { user1, user2 } = req.params;

  try {
    const messages = await Mensagem.findAll({
      where: {
        [Sequelize.Op.or]: [
          { sender_id: user1, receiver_id: user2 },
          { sender_id: user2, receiver_id: user1 },
        ],
      },
      include: [
        {
          model: User,
          as: "sender",
          attributes: ["id", "nome", "profile_picture"],
        },
        {
          model: User,
          as: "receiver",
          attributes: ["id", "nome", "profile_picture"],
        },
      ],
      order: [["created_at", "ASC"]],
    });

    res.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error.message);
    console.error(error); // Log the full error object for more details
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getMessagesByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const messages = await Mensagem.findAll({
      where: {
        sender_id: userId,
      },
      include: [
        {
          model: User,
          as: "sender",
          attributes: ["id", "nome", "profile_picture"],
        },
        {
          model: User,
          as: "receiver",
          attributes: ["id", "nome", "profile_picture"],
        },
      ],
      order: [["created_at", "ASC"]],
    });

    res.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
