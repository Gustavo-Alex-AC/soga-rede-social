// controllers/userController.js
const { EventoParticipante } = require("../models");

exports.createEventoParticipante = async (req, res) => {
  try {
    const eventoParticipante = await EventoParticipante.create(req.body);
    res.status(201).json(eventoParticipante);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEventoParticipantes = async (req, res) => {
  try {
    const eventoParticipantes = await EventoParticipante.findAll();
    res.status(200).json(eventoParticipantes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
