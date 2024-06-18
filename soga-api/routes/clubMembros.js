// routes/posts.js
const express = require("express");
const router = express.Router();
const clubMembroController = require("../controllers/clubMembroController");

router.post("/", clubMembroController.createClubMembro);
router.get("/", clubMembroController.getClubMembros);

module.exports = router;
