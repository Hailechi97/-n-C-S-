const express = require("express");
const bcrypt = require("bcrypt");
const con = require("../config/db"); // Require db.js

const router = express.Router();

// 🚀 API Đăng nhập
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Vui lòng nhập email và mật khẩu" });
    }

    // 🛠 Kiểm tra email trong DB
    con.query(
      "SELECT EmpID, PasswordHash FROM Users WHERE Email = ?",
      [email],
      async (err, results) => {
        if (err) {
          console.error("❌ Lỗi truy vấn MySQL:", err);
          return res.status(500).json({ message: "Lỗi server" });
        }

        if (results.length === 0) {
          console.warn("⚠️ Email không tồn tại:", email);
          return res.status(401).json({ message: "Email không tồn tại" });
        }

        console.log("✅ Kết quả truy vấn:", results);
        const user = results[0];

        // 🛠 Kiểm tra mật khẩu
        const passwordMatch = await bcrypt.compare(password, user.PasswordHash);
        console.log("🔍 Kiểm tra mật khẩu:", passwordMatch);

        if (!passwordMatch) {
          console.warn("❌ Sai mật khẩu:", email);
          return res.status(401).json({ message: "Sai mật khẩu" });
        }

        console.log("🎉 Đăng nhập thành công:", user.EmpID);

        // ✅ Trả về thông tin user
        res.json({
          message: "Đăng nhập thành công",
          user: {
            EmpID: user.EmpID,
            email: email,
          },
        });
      }
    );
  } catch (error) {
    console.error("❌ Lỗi xử lý đăng nhập:", error);
    res.status(500).json({ message: "Lỗi server" });
  }
});

module.exports = router;
