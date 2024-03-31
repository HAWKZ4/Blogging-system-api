const models = require("../models");
const Validator = require("fastest-validator");

// Create Post
const createPost = async (req, res) => {
  try {
    const { title, content, categoryId, imageUrl, userId } = req.body;
    const post = {
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

    const v = new Validator();
    const check = v.compile(schema);
    const validationResponse = check(post);

    if (validationResponse !== true) {
      return res.status(400).json({
        message: "Validation failed",
        errors: validationResponse,
      });
    }

    const result = await models.Post.create(post);
    if (result) {
      res.status(201).json({
        message: "Post created successfully",
        post: result,
      });
    }
  } catch (error) {
    res.status(500);
    error;
  }
};

// Get post
const getPost = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await models.Post.findByPk(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      error,
    });
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
    res.status(500).json({
      message: "Something went wrong!",
      error,
    });
  }
};

// Update Post
const updatePost = async (req, res) => {
  const id = req.params.id;
  const userId = 1;

  try {
    const { title, content, imageUrl, categoryId } = req.body;

    const updatedPost = {
      title,
      content,
      imageUrl,
      categoryId,
    };

    const schema = {
      title: { type: "string", optional: false, max: 100 },
      content: { type: "string", optional: false, max: 500 },
      categoryId: { type: "number", optional: false },
    };

    const v = new Validator();
    const check = v.compile(schema);
    const validationResponse = check(updatedPost);

    if (validationResponse !== true) {
      return res.status(400).json({
        message: "Validation failed",
        errors: validationResponse,
      });
    }

    const result = await models.Post.update(updatedPost, { where: { id, userId } });
    if (result) {
      res.status(200).json({
        message: "Post updated successfully",
        updatedPost,
      });
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};

// Delete Post
const deletePost = async (req, res) => {
  const id = req.params.id;
  // const userId = 1;

  try {
    const result = await models.Post.destroy({ where: { id } });
    if (result) {
      res.status(200).json({ message: "Post deleted successfully" });
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};

module.exports = { createPost, getPosts, getPost, updatePost, deletePost };
