const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost", // Kiểm tra đúng chưa
  user: "root", // Đúng user chưa
  password: "2280600798Hai", // Mật khẩu database
  database: "EmployeeManagement", // Đúng tên database chưa
});

con.connect((err) => {
  if (err) {
    console.error("❌ Lỗi kết nối MySQL:", err);
    return;
  }
  console.log("✅ Kết nối MySQL thành công!");
});

module.exports = con;
