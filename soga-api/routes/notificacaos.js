const express = require("express");
const router = express.Router();
const notificacaoController = require("../controllers/notificacaoController");

router.post("/", notificacaoController.createNotificacao);
router.get("/", notificacaoController.getNotificacaos);

module.exports = router;
