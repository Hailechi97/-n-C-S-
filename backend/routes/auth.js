const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const con = require("../config/db"); // Require db.js

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  con.query(
    "SELECT * FROM Users WHERE Email = ?",
    [email],
    async (err, results) => {
      if (err) {
        console.error("Lỗi truy vấn:", err);
        return res.status(500).json({ message: "Lỗi server" });
      }
      console.log("Kết quả truy vấn:", results); // Kiểm tra kết quả truy vấn

      if (results.length === 0) {
        return res
          .status(401)
          .json({ message: "Email hoặc mật khẩu không đúng" });
      }

      const user = results[0];
      const passwordMatch = await bcrypt.compare(password, user.PasswordHash);

      console.log("Mật khẩu khớp:", passwordMatch); // Kiểm tra kết quả so sánh

      if (passwordMatch) {
        res.json({
          message: "Đăng nhập thành công",
          user: {
            EmpID: user.EmpID, // Thêm thông tin EmpID
            // Thêm các thông tin người dùng khác nếu cần
          },
        });
      } else {
        res.status(401).json({ message: "Email hoặc mật khẩu không đúng" });
      }
    }
  );
});

module.exports = router;
