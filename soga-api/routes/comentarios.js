const express = require("express");
const router = express.Router();
const comentarioController = require("../controllers/comentarioController");

router.post("/", comentarioController.createComentario);
router.get("/", comentarioController.getComentariosByPostId);
router.get("/count", comentarioController.getComentariosCountByPostId);

module.exports = router;
