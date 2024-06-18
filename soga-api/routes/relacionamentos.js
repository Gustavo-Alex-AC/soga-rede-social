const express = require("express");
const router = express.Router();
const relacionamentoController = require("../controllers/relacionamentoController");

router.post("/send", relacionamentoController.sendFriendRequest);
router.put("/accept/:id", relacionamentoController.acceptFriendRequest);
router.delete("/delete/:id", relacionamentoController.deleteFriendRequest);
router.get("/friends/:userId", relacionamentoController.getAllFriends);
router.get(
  "/suggestions/:userId",
  relacionamentoController.getFriendSuggestions
);
router.get(
  "/pending/:userId",
  relacionamentoController.getPendingFriendRequests
);

module.exports = router;
