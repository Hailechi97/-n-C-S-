const express = require("express");
const { getAllPosts, createPost } = require("../controllers/postController"); // Import các hàm controller

const router = express.Router();

// Route để lấy tất cả bài viết
router.get("/posts", getAllPosts);

// Route để tạo một bài viết mới
router.post("/posts", createPost);

module.exports = router;
