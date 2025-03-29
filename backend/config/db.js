const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2280600798Hai",
  database: "EmployeeManagement",
});

con.connect((err) => {
  if (err) {
    console.error("Lỗi kết nối database:", err);
    return;
  }
  console.log("Kết nối database thành công!");
});

module.exports = con;
