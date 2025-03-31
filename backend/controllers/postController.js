// postController.js
const Post = require("../models/Post");

// Lấy tất cả bài viết
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Không thể lấy bài viết", error: error.message });
  }
};

// Tạo bài viết mới
const createPost = async (req, res) => {
  const { EmpID, Title, Content, PostedDate, Status } = req.body;
  try {
    const post = await Post.create({
      EmpID,
      Title,
      Content,
      PostedDate,
      Status,
    });
    res.status(201).json(post);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Không thể tạo bài viết", error: error.message });
  }
};

module.exports = { getAllPosts, createPost };
