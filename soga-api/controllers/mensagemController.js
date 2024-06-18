// controllers/userController.js
const { Mensagem } = require("../models");

exports.createMensagem = async (req, res) => {
  try {
    const mensagem = await Mensagem.create(req.body);
    res.status(201).json(mensagem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMensagens = async (req, res) => {
  try {
    const mensagens = await Mensagem.findAll();
    res.status(200).json(mensagens);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
