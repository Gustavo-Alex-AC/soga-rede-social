const express = require("express");
const router = express.Router();
const eventoParticipanteController = require("../controllers/eventoParticipanteController");

router.post("/", eventoParticipanteController.createEventoParticipante);
router.get("/", eventoParticipanteController.getEventoParticipantes);

module.exports = router;
