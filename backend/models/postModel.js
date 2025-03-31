// models/Post.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Kết nối với database

// Định nghĩa model Post
const Post = sequelize.define(
  "Post",
  {
    // ID bài viết, là khóa chính và tự động tăng
    PostID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // ID nhân viên (tạo bài viết)
    EmpID: {
      type: DataTypes.STRING,
      allowNull: false, // Không thể thiếu
    },
    // Tiêu đề bài viết
    Title: {
      type: DataTypes.STRING,
      allowNull: false, // Không thể thiếu
    },
    // Nội dung bài viết
    Content: {
      type: DataTypes.TEXT,
      allowNull: false, // Không thể thiếu
    },
    // Ngày đăng bài viết
    PostedDate: {
      type: DataTypes.DATE,
      allowNull: false, // Không thể thiếu
    },
    // Số lượt xem bài viết
    Views: {
      type: DataTypes.INTEGER,
      defaultValue: 0, // Mặc định là 0 lượt xem
    },
    // Số lượt thích bài viết
    Likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0, // Mặc định là 0 lượt thích
    },
    // Trạng thái bài viết (Công khai, Nháp, Ẩn)
    Status: {
      type: DataTypes.ENUM("Công khai", "Nháp", "Ẩn"),
      allowNull: false, // Không thể thiếu
      defaultValue: "Công khai", // Mặc định là công khai
    },
  },
  {
    tableName: "Posts", // Tên bảng trong cơ sở dữ liệu
    timestamps: false, // Không sử dụng createdAt, updatedAt
  }
);

module.exports = Post; // Xuất mô hình Post để sử dụng trong các phần khác của ứng dụng
