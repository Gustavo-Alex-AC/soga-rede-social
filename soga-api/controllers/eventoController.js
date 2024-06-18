const { Evento } = require("../models");

exports.createEvento = async (req, res) => {
  try {
    const evento = await Evento.create(req.body);
    res.status(201).json(evento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEventos = async (req, res) => {
  try {
    const eventos = await Evento.findAll();
    res.status(200).json(eventos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
