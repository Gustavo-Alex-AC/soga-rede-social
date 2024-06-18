const express = require("express");
const router = express.Router();
const curtidaController = require("../controllers/curtidaController");

router.post("/", curtidaController.createCurtida);
router.delete("/", curtidaController.deleteCurtida);
router.get("/count", curtidaController.getCurtidasCountByPostId);
router.get("/is-curtido", curtidaController.isPostCurtidoByUser);

module.exports = router;
