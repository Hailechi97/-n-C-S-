const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const apiRoutes = require("./routes/api"); // Import route api

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", apiRoutes); // Sử dụng các route api

// Phục vụ tất cả các file tĩnh từ thư mục frontend
app.use(express.static("frontend"));

app.listen(port, () => {
  console.log(`Server đang chạy trên port ${port}`);
});
