const express = require("express");
const router = express.Router();
const {
  createComment,
  getComment,
  getComments,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");

const checkAuth = require("../middlewares/authMiddleware"); // Middleware

router.route("/").get(getComments).post(checkAuth, createComment);
router.route("/:id").get(getComment).put(checkAuth, updateComment).delete(checkAuth, deleteComment);

module.exports = router;
