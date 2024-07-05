const { Relacionamento, User } = require("../models");
const Sequelize = require("sequelize");
const { Op } = require("sequelize");

// Send a friendship request
exports.sendFriendRequest = async (req, res) => {
  const { user_id, relacao_id } = req.body;
  try {
    const newRequest = await Relacionamento.create({
      user_id,
      relacao_id,
      status: "pending",
    });
    res.status(201).json(newRequest);
  } catch (error) {
    console.error("Error sending friend request:", error);
    res.status(500).json({ message: "Error sending friend request" });
  }
};

// Accept a friendship request
exports.acceptFriendRequest = async (req, res) => {
  const { id } = req.params;
  try {
    const request = await Relacionamento.findByPk(id);
    if (!request) {
      return res.status(404).json({ message: "Friend request not found" });
    }
    request.status = "accepted";
    await request.save();
    res.json(request);
  } catch (error) {
    console.error("Error accepting friend request:", error);
    res.status(500).json({ message: "Error accepting friend request" });
  }
};

// Delete a friendship request or unfriend
exports.deleteFriendRequest = async (req, res) => {
  const { id } = req.params;
  try {
    const request = await Relacionamento.findByPk(id);
    if (!request) {
      return res.status(404).json({ message: "Friend request not found" });
    }
    await request.destroy();
    res.json({ message: "Friend request deleted" });
  } catch (error) {
    console.error("Error deleting friend request:", error);
    res.status(500).json({ message: "Error deleting friend request" });
  }
};

// Fetch friendship suggestions
exports.getFriendSuggestions = async (req, res) => {
  const { userId } = req.params;
  try {
    const friends = await Relacionamento.findAll({
      where: {
        user_id: userId,
        status: "accepted",
      },
      attributes: ["relacao_id"],
    });

    //console.log("Friends fetched:", friends);

    const friendIds = friends.map((friend) => friend.relacao_id);

    console.log("Friend IDs:", friendIds);

    const suggestions = await User.findAll({
      where: {
        id: {
          [Op.notIn]: [...friendIds, userId],
        },
      },
      attributes: ["id", "nome", "profile_picture"],
      limit: 10,
    });

    //console.log("Suggestions fetched:", suggestions);

    res.json(suggestions);
  } catch (error) {
    console.error("Error fetching friend suggestions:", error);
    res.status(500).json({ message: "Error fetching friend suggestions" });
  }
};

// Fetch pending friend requests
exports.getPendingFriendRequests = async (req, res) => {
  const { userId } = req.params;
  try {
    const pendingRequests = await Relacionamento.findAll({
      where: {
        relacao_id: userId,
        status: "pending",
      },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["id", "nome", "profile_picture"],
        },
      ],
    });
    res.json(pendingRequests);
  } catch (error) {
    console.error("Error fetching pending friend requests:", error);
    res.status(500).json({ message: "Error fetching pending friend requests" });
  }
};

/// Fetch all friends
exports.getAllFriends = async (req, res) => {
  const { userId } = req.params;
  try {
    const friends = await Relacionamento.findAll({
      where: {
        [Sequelize.Op.or]: [
          { user_id: userId, status: "accepted" },
          { relacao_id: userId, status: "accepted" },
        ],
      },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["id", "nome", "profile_picture"],
        },
        {
          model: User,
          as: "relacao",
          attributes: ["id", "nome", "profile_picture"],
        },
      ],
    });

    const friendList = friends.map((friend) => {
      if (friend.user_id == userId) {
        return {
          id: friend.relacao.id,
          nome: friend.relacao.nome,
          profile_picture: friend.relacao.profile_picture,
        };
      } else {
        return {
          id: friend.user.id,
          nome: friend.user.nome,
          profile_picture: friend.user.profile_picture,
        };
      }
    });

    res.json(friendList);
  } catch (error) {
    console.error("Error fetching friends:", error);
    res.status(500).json({ message: "Error fetching friends" });
  }
};

// Delete a friendship
exports.deleteFriendship = async (req, res) => {
  const { userId, friendId } = req.params;
  try {
    const result = await Relacionamento.destroy({
      where: {
        [Sequelize.Op.or]: [
          { user_id: userId, relacao_id: friendId },
          { user_id: friendId, relacao_id: userId },
        ],
      },
    });

    if (result > 0) {
      res.status(200).json({ message: "Friendship deleted successfully" });
    } else {
      res.status(404).json({ message: "Friendship not found" });
    }
  } catch (error) {
    console.error("Error deleting friendship:", error);
    res.status(500).json({ message: "Error deleting friendship" });
  }
};
