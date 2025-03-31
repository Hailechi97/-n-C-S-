const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const apiRoutes = require("./routes/api"); // Import các route API chung
const postRoutes = require("./routes/postRoutes"); // Import route API cho bài viết
const listEndpoints = require("express-list-endpoints");

const app = express();
const port = 3000;

// Cấu hình CORS (Nếu cần tùy chỉnh thêm)
app.use(
  cors({
    origin: "http://localhost:8080", // Cấu hình cho phép frontend từ port 8080 truy cập
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Parse JSON bodies
app.use(express.json());

// Sử dụng các route API
app.use("/api/auth", authRoutes);
app.use("/api", apiRoutes); // Sử dụng các route chung
app.use("/api", postRoutes); // Sử dụng các route liên quan đến bài viết

// Phục vụ tất cả các file tĩnh từ thư mục frontend
app.use(express.static("frontend"));

// In danh sách các API đã định nghĩa
console.log(listEndpoints(app));

// Middleware xử lý lỗi route không tìm thấy
app.use((req, res, next) => {
  res.status(404).json({ message: "Route không tồn tại!" });
});

// Middleware xử lý các lỗi không mong muốn trong server
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Đã có lỗi xảy ra trên server!" });
});

// Khởi chạy server
app.listen(port, () => {
  console.log(`Server đang chạy trên port ${port}`);
});
