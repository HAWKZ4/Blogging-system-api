const models = require("../models");
const validationInput = require("../utils/validationInput");

// Create comment
const createComment = async (req, res) => {
  try {
    const { content, userId, postId } = req.body;
    const commentInfo = {
      content,
      userId,
      postId,
    };

    const schema = {
      content: { type: "string", optional: false, max: "500" },
    };

    validationInput(commentInfo, schema, res);

    const result = await models.Comment.create(commentInfo);

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

  const { content } = req.body;

  const updatedcommentInfo = {
    content,
  };

  const schema = {
    content: { type: "string", optional: false, max: 500 },
  };

  validationInput(updatedcommentInfo, schema, res);

  try {
    const isExists = await models.Comment.findByPk(id);

    if (isExists) {
      const result = await models.Comment.update(updatedcommentInfo, { where: { id, userId } });
      if (result) {
        res.status(200).json({
          message: "Comment updated successfully",
          updatedcommentInfo,
        });
      } else {
        return res.status(404).json({ message: "Comment not found" });
      }
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

module.exports = { createComment, getComments, getComment, updateComment, deleteComment };
