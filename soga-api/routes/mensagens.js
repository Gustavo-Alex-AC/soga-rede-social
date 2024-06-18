// routes/posts.js
const express = require("express");
const router = express.Router();
const mensagemController = require("../controllers/mensagemController");

router.post("/", mensagemController.createMensagem);
router.get("/", mensagemController.getMensagens);

module.exports = router;
