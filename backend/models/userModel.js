const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define(
  "User",
  {
    EmpID: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    FirstName: {
      type: DataTypes.STRING,
    },
    LastName: {
      type: DataTypes.STRING,
    },
    Gender: {
      type: DataTypes.ENUM("Nam", "Nữ", "Khác"),
    },
    Birthdate: {
      type: DataTypes.DATE,
    },
    Telephone: {
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.STRING,
      unique: true,
    },
    Address_loc: {
      type: DataTypes.TEXT,
    },
    Department: {
      type: DataTypes.STRING,
    },
    ChucVu: {
      type: DataTypes.STRING,
    },
    CapBac: {
      type: DataTypes.STRING,
    },
    Photo: {
      type: DataTypes.STRING,
    },
    ChuKiLuong: {
      type: DataTypes.ENUM("Hàng tháng", "Hàng quý", "Hàng năm"),
    },
    LuongCoBan: {
      type: DataTypes.DECIMAL(10, 2),
    },
    NgayThamGia: {
      type: DataTypes.DATE,
    },
    Status: {
      type: DataTypes.ENUM("Hoạt động", "Nghỉ việc", "Tạm nghỉ"),
    },
  },
  {
    tableName: "Employees", // Tên bảng trong database
    timestamps: false, // Tắt timestamps (createdAt, updatedAt) nếu không cần
  }
);

module.exports = User;
