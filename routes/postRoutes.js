const express = require("express");
const {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} = require("../controllers/postController");
const checkAuth = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").post(checkAuth, createPost).get(getPosts);
router.route("/:id").get(getPost).delete(checkAuth, deletePost);
router.put("/:id", checkAuth, updatePost);

module.exports = router;
