// controllers/userController.js

// controllers/postController.js
const { Post, User } = require("../models");

exports.createPost = async (req, res) => {
  try {
    const { content, user_id } = req.body;
    const mediaUrl = req.file ? req.file.filename : null;

    console.log("Content:", content);
    console.log("User ID:", user_id);
    console.log("Media URL:", mediaUrl);

    // Ensure user_id is provided
    if (!user_id) {
      return res.status(400).json({ error: "User ID is required" });
    }

    // Validate user_id exists
    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const post = await Post.create({
      content,
      mediaUrl,
      user_id,
    });

    res.status(201).json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// exports.createPost = async (req, res) => {
//   try {
//     const post = await Post.create(req.body);
//     res.status(201).json(post);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Fetch posts for a specific user profile
exports.getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await Post.findAll({
      where: { user_id: userId },
      //order: [["createdAt", "DESC"]],
    });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Fetch posts for the home/feed page
exports.getFeedPosts = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming user is authenticated and user ID is available
    const user = await User.findByPk(userId, { include: "friends" }); // Assuming User model has a friends field
    const friendIds = user.friends.map((friend) => friend.id);
    const posts = await Post.findAll({
      where: {
        user_id: {
          [Op.in]: [userId, ...friendIds],
        },
      },
      order: [["createdAt", "DESC"]],
    });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a post
exports.updatePost = async (req, res) => {
  try {
    const [updated] = await Post.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedPost = await Post.findByPk(req.params.id);
      res.status(200).json(updatedPost);
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a post
exports.deletePost = async (req, res) => {
  try {
    const deleted = await Post.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).json({ message: "Post deleted" });
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
