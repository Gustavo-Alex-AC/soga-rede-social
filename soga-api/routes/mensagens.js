// routes/mensagemRoutes.js
const express = require("express");
const router = express.Router();
const mensagemController = require("../controllers/mensagemController");

router.get("/:user1/:user2", mensagemController.getMessages);
router.get("/:userId", mensagemController.getMessagesByUser);
// Send a message
router.post("/send", mensagemController.sendMessage);

module.exports = router;
