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

// controllers/eventoController.js

const { Op } = require("sequelize");

// Cria um novo evento
exports.createEvento = async (req, res) => {
  try {
    const { club_id, title, description, event_date } = req.body;
    const newEvento = await Evento.create({ club_id, title, description, event_date });
    res.status(201).json(newEvento);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o evento" });
  }
};

// Lista todos os eventos
exports.getAllEventos = async (req, res) => {
  try {
    const eventos = await Evento.findAll();
    res.status(200).json(eventos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar eventos" });
  }
};

// Busca um evento por ID
exports.getEventoById = async (req, res) => {
  try {
    const { id } = req.params;
    const evento = await Evento.findByPk(id);
    if (!evento) {
      return res.status(404).json({ error: "Evento não encontrado" });
    }
    res.status(200).json(evento);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar o evento" });
  }
};

// Atualiza um evento
exports.updateEvento = async (req, res) => {
  try {
    const { id } = req.params;
    const { club_id, title, description, event_date } = req.body;
    const [updated] = await Evento.update({ club_id, title, description, event_date }, { where: { id } });

    if (!updated) {
      return res.status(404).json({ error: "Evento não encontrado" });
    }

    const updatedEvento = await Evento.findByPk(id);
    res.status(200).json(updatedEvento);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar o evento" });
  }
};

// Deleta um evento
exports.deleteEvento = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Evento.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ error: "Evento não encontrado" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar o evento" });
  }
};

