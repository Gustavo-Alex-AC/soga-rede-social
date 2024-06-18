// controllers/userController.js
const { Notificacao } = require("../models");

exports.createNotificacao = async (req, res) => {
  try {
    const notificacao = await Notificacao.create(req.body);
    res.status(201).json(notificacao);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getNotificacaos = async (req, res) => {
  try {
    const notificacaos = await Notificacao.findAll();
    res.status(200).json(notificacaos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
