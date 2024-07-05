// routes/users.js
const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const userController = require("../controllers/userController");

router.get("/search", userController.searchUsers);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
//router.put("/:id", userController.updateUser);
router.put("/:id", upload.single("profile_picture"), userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
