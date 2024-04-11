const models = require("../models");
const validationInput = require("../utils/validationInput");

// Create Post
const createPost = async (req, res) => {
  const { title, content, categoryId, imageUrl } = req.body;
  const userId = req.userData.userId;
  const postInfo = {
    title,
    content,
    imageUrl,
    categoryId,
    userId,
  };

  const schema = {
    title: { type: "string", optional: false, max: "100" },
    content: { type: "string", optional: false, max: "500" },
    categoryId: { type: "number", optional: false },
  };

  validationInput(postInfo, schema, res);

  try {
    const category = await models.Category.findByPk(categoryId);
    if (!category) {
      return res.status(400).json({ message: "Invalid category ID" });
    }

    const post = await models.Post.create(postInfo);
    res.status(201).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Failed to create post", error });
  }
};

// Get post
const getPost = async (req, res) => {
  const id = req.params.id;

  try {
    // Post belongs to many categories && Post belongs to just one user
    const result = await models.Post.findByPk(id, { include: [models.Category, models.User] });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    console.error("Error in fetch post", error);
    res.status(500).json({ message: "Failed to get post", error });
  }
};

// Get All Posts
const getPosts = async (req, res) => {
  try {
    const posts = await models.Post.findAll();
    if (posts) {
      res.status(200).json(posts);
    }
  } catch (error) {
    console.error("Error in fetch all posts", error);
    res.status(500).json({ message: "Failed to get all posts", error });
  }
};

// Update Post
const updatePost = async (req, res) => {
  const id = req.params.id;
  const userId = req.userData.userId;

  const { title, content, imageUrl, categoryId } = req.body;

  const updatedPostInfo = {
    title,
    content,
    imageUrl,
    categoryId,
    userId,
  };

  const schema = {
    title: { type: "string", optional: false, max: 100 },
    content: { type: "string", optional: false, max: 500 },
    categoryId: { type: "number", optional: false },
  };

  validationInput(updatedPostInfo, schema, res);

  try {
    const category = await models.Category.findByPk(categoryId);
    if (!category) {
      return res.status(400).json({ message: "Invalid category ID" });
    }

    const post = await models.Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    await models.Post.update(updatedPostInfo, { where: { id, userId } });
    res.status(200).json({
      message: "Post updated successfully",
      updatedPostInfo,
    });
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ message: "Failed to update post", error });
  }
};

// Delete Post
const deletePost = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await models.Post.destroy({ where: { id } });
    if (result) {
      res.status(200).json({ message: "Post deleted successfully" });
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    console.error("Error in post delete", error);
    res.status(500).json({ message: "Failed to delete post", error });
  }
};

module.exports = { createPost, getPosts, getPost, updatePost, deletePost };
