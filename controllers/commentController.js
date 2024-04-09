const models = require("../models");
const validationInput = require("../utils/validationInput");

// Create comment
const createComment = async (req, res) => {
  const userId = req.userData.userId;

  try {
    const { content, postId } = req.body;

    const commentInfo = {
      content,
      postId,
      userId,
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
    console.error("Error in create comment", error);
    res.status(500).json({ message: "Failed to create comment", error });
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
    console.error("Error in fetch comment", error);
    res.status(500).json({ message: "Failed to get comment", error });
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
    console.error("Error in fetch comments", error);
    res.status(500).json({ message: "Failed to get all comments", error });
  }
};

// Update comment
const updateComment = async (req, res) => {
  const id = req.params.id;
  const userId = req.userData.userId;

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
    console.error("Error in update comment ", error);
    res.status(500).json({ message: "Failed to update comment", error });
  }
};

// Delete comment
const deleteComment = async (req, res) => {
  const id = req.params.id;
  const userId = req.userData.userId;

  try {
    const result = await models.Comment.destroy({ where: { id, userId } });
    if (result) {
      res.status(200).json({ message: "comment deleted successfully" });
    } else {
      res.status(404).json({ message: "comment not found" });
    }
  } catch (error) {
    console.error("Error in delete comment", error);
    res.status(500).json({ message: "Failed to delete comment", error });
  }
};

module.exports = { createComment, getComments, getComment, updateComment, deleteComment };
