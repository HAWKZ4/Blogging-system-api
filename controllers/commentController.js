const models = require("../models");
const Validator = require("fastest-validator");

// Create comment
const createComment = async (req, res) => {
  try {
    const { content, userId, postId } = req.body;
    const comment = {
      content,
      userId,
      postId,
    };

    const schema = {
      content: { type: "string", optional: false, max: "500" },
    };

    const v = new Validator();
    const check = v.compile(schema);
    const validationResponse = check(comment);

    if (validationResponse !== true) {
      return res.status(400).json({
        message: "Validation failed",
        errors: validationResponse,
      });
    }

    const result = await models.Comment.create(comment);
    if (result) {
      res.status(201).json({
        message: "comment created successfully",
        comment: result,
      });
    }
  } catch (error) {
    res.status(500);
    error;
  }
};

// Get comment
const getComment = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await models.Comment.findByPk(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "comment not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      error,
    });
  }
};

// Get All comments
const getComments = async (req, res) => {
  try {
    const comments = await models.Comment.findAll();
    if (comments) {
      res.status(200).json(comments);
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      error,
    });
  }
};

// Update comment
const updateComment = async (req, res) => {
  const id = req.params.id;
  const userId = 1;

  try {
    const { content } = req.body;

    const updatedcomment = {
      content,
    };

    const schema = {
      content: { type: "string", optional: false, max: 500 },
    };

    const v = new Validator();
    const check = v.compile(schema);
    const validationResponse = check(updatedcomment);

    if (validationResponse !== true) {
      return res.status(400).json({
        message: "Validation failed",
        errors: validationResponse,
      });
    }

    const result = await models.Comment.update(updatedcomment, { where: { id, userId } });
    if (result) {
      res.status(200).json({
        message: "comment updated successfully",
        updatedcomment,
      });
    } else {
      res.status(404).json({ message: "comment not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};

// Delete comment
const deleteComment = async (req, res) => {
  const id = req.params.id;
  // const userId = 1;

  try {
    const result = await models.Comment.destroy({ where: { id } });
    if (result) {
      res.status(200).json({ message: "comment deleted successfully" });
    } else {
      res.status(404).json({ message: "comment not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};

module.exports = { createComment, getComments, getComment,gi };
