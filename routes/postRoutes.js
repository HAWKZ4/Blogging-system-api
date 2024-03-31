const express = require("express");
const {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} = require("../controllers/postController");
const router = express.Router();

router.post("/", createPost).get("/", getPosts);
router.get("/:id", getPost).delete("/:id", deletePost);
router.put("/:id", updatePost);

module.exports = router;
