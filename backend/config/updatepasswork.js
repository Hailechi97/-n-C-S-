const mysql = require("mysql");
const bcrypt = require("bcrypt");

// Thông tin kết nối database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2280600798Hai",
  database: "EmployeeManagement",
});

connection.connect((err) => {
  if (err) {
    console.error("Lỗi kết nối database:", err);
    return;
  }
  console.log("Đã kết nối đến database");
});

async function updatePasswordHash(email, newPassword) {
  try {
    // Tạo salt
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    // Hash mật khẩu mới
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Cập nhật PasswordHash trong database
    const query = "UPDATE Users SET PasswordHash = ? WHERE Email = ?";
    connection.query(query, [hashedPassword, email], (err, results) => {
      if (err) {
        console.error("Lỗi cập nhật mật khẩu:", err);
        return;
      }
      console.log("Cập nhật mật khẩu thành công:", results);
    });
  } catch (err) {
    console.error("Lỗi hash mật khẩu:", err);
  }
}

// Sử dụng hàm updatePasswordHash
const emailToUpdate = "binh.tran@example.com"; // Thay đổi email nếu cần
const newPassword = "123456"; // Thay đổi mật khẩu mới

updatePasswordHash(emailToUpdate, newPassword);

// Đóng kết nối database khi hoàn thành
// connection.end();
