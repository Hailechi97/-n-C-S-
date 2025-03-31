require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT || 3306, // Định nghĩa cổng nếu có
    logging: false, // Tắt log SQL nếu không cần
  }
);

// Kiểm tra kết nối database
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Kết nối database thành công!");
  } catch (error) {
    console.error("❌ Lỗi kết nối database:", error);
  }
})();

module.exports = sequelize;
