
// routes/eventoRoutes.js
const express = require("express");
const router = express.Router();
const eventoController = require("../controllers/eventoController");

router.post("/", eventoController.createEvento);
router.get("/", eventoController.getAllEventos);
router.get("/:id", eventoController.getEventoById);
router.put("/:id", eventoController.updateEvento);
router.delete("/:id", eventoController.deleteEvento);

module.exports = router;


