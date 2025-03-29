const Comment = require("../models/commentModel");

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateComment = async (req, res) => {
  try {
    const comment = await Comment.update(req.body, {
      where: {
        CommentID: req.params.id,
      },
    });
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.destroy({
      where: {
        CommentID: req.params.id,
      },
    });
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllComments,
  createComment,
  updateComment,
  deleteComment,
};
