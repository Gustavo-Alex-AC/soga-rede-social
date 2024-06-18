const { ClubMembro } = require("../models");

exports.createClubMembro = async (req, res) => {
  try {
    const clubMembro = await ClubMembro.create(req.body);
    res.status(201).json(clubMembro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getClubMembros = async (req, res) => {
  try {
    const clubMembros = await ClubMembro.findAll();
    res.status(200).json(clubMembros);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
