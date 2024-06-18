const { Curtida } = require("../models");

exports.createCurtida = async (req, res) => {
  const { user_id, post_id } = req.body;
  try {
    const curtida = await Curtida.create({ user_id, post_id });
    res.status(201).json(curtida);
  } catch (error) {
    console.error("Error creating Curtida:", error);
    res.status(500).json({ message: "Error creating Curtida" });
  }
};

exports.deleteCurtida = async (req, res) => {
  const { user_id, post_id } = req.body;
  try {
    const curtida = await Curtida.destroy({
      where: { user_id, post_id },
    });
    res.status(204).json(curtida);
  } catch (error) {
    console.error("Error deleting Curtida:", error);
    res.status(500).json({ message: "Error deleting Curtida" });
  }
};

exports.getCurtidasCountByPostId = async (req, res) => {
  const { post_id } = req.query;
  try {
    const count = await Curtida.count({
      where: { post_id },
    });
    res.json({ count });
  } catch (error) {
    console.error("Error fetching Curtidas count:", error);
    res.status(500).json({ message: "Error fetching Curtidas count" });
  }
};

exports.isPostCurtidoByUser = async (req, res) => {
  const { user_id, post_id } = req.query;
  try {
    const curtida = await Curtida.findOne({
      where: { user_id, post_id },
    });
    res.json({ curtida: !!curtida });
  } catch (error) {
    console.error("Error checking if post is Curtidad by user:", error);
    res
      .status(500)
      .json({ message: "Error checking if post is Curtidad by user" });
  }
};
