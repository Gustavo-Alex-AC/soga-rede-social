const { Comentario, User } = require("../models");

exports.createComentario = async (req, res) => {
  try {
    const { user_id, post_id, content } = req.body;

    // Ensure user_id is provided
    if (!user_id) {
      return res.status(400).json({ error: "User ID is required" });
    }

    // Validate user_id exists
    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const comentario = await Comentario.create({
      user_id,
      post_id,
      content,
    });

    res.status(201).json(comentario);
  } catch (error) {
    console.error("Error creating comentario:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// exports.createComentario = async (req, res) => {
//   try {
//     const comentario = await Comentario.create(req.body);
//     res.status(201).json(comentario);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

exports.getComentariosByPostId = async (req, res) => {
  const { post_id } = req.query;
  try {
    const comentarios = await Comentario.findAll({
      where: { post_id },
      include: [{ model: User, attributes: ["nome", "profile_picture"] }],
      order: [["created_at", "DESC"]],
    });
    res.json(comentarios);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ message: "Error fetching comments" });
  }
};

exports.getComentarios = async (req, res) => {
  try {
    const comentarios = await Comentario.findAll();
    res.status(200).json(comentarios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getComentariosCountByPostId = async (req, res) => {
  const { post_id } = req.query;
  try {
    const count = await Comentario.count({
      where: { post_id },
    });
    res.json({ count });
  } catch (error) {
    console.error("Error fetching comments count:", error);
    res.status(500).json({ message: "Error fetching comments count" });
  }
};
