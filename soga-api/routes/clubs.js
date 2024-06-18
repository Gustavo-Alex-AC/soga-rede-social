const express = require("express");
const router = express.Router();
const clubController = require("../controllers/clubController");

router.post("/", clubController.createClub);
router.get("/", clubController.getClubs);

module.exports = router;
