// routes/posts.js
const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const upload = require("../config/multer");

router.post("/", upload.single("media"), postController.createPost);
router.get("/", postController.getPosts);
router.get("/user/:userId", postController.getUserPosts);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

module.exports = router;
