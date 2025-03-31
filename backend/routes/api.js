const express = require("express");
const con = require("../config/db");

const router = express.Router();

// 🛠 Hàm định dạng thời gian
function formatTime(dateTime) {
  console.log("📅 Raw dateTime:", dateTime); // Debug giá trị đầu vào
  if (!dateTime) return "N/A"; // Trả về giá trị mặc định nếu rỗng

  const parsedDate = new Date(dateTime);
  if (isNaN(parsedDate)) {
    console.warn("⚠️ Lỗi định dạng thời gian:", dateTime);
    return "Invalid Date";
  }

  const hours = parsedDate.getHours().toString().padStart(2, "0");
  const minutes = parsedDate.getMinutes().toString().padStart(2, "0");
  const day = parsedDate.getDate().toString().padStart(2, "0");
  const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0");
  const year = parsedDate.getFullYear();
  return `${hours}:${minutes} - ${day}/${month}/${year}`;
}

// 🚀 API Lịch họp
router.get("/meetings", (req, res) => {
  con.query(
    "SELECT Title, StartTime, Content FROM Meetings",
    (err, results) => {
      if (err) {
        console.error("❌ Lỗi truy vấn MySQL (meetings):", err.sqlMessage);
        return res.status(500).json({ message: "Lỗi server" });
      }

      const meetings = results.map((meeting) => ({
        Title: meeting.Title || "Không có tiêu đề",
        Content: meeting.Content || "Nội dung trống",
        FormattedStartTime: formatTime(meeting.StartTime),
      }));

      console.log("✅ Meetings response:", meetings);
      res.json(meetings);
    }
  );
});

// 🚀 API Nhân viên
router.get("/employees", (req, res) => {
  con.query(
    "SELECT FirstName, LastName, ChucVu, Status FROM Employees",
    (err, results) => {
      if (err) {
        console.error("❌ Lỗi truy vấn MySQL (employees):", err.sqlMessage);
        return res.status(500).json({ message: "Lỗi server" });
      }

      const employees = results.map((emp) => ({
        FullName: `${emp.FirstName || ""} ${emp.LastName || ""}`.trim(),
        Position: emp.ChucVu || "Không rõ chức vụ",
        Status: emp.Status || "Chưa cập nhật",
      }));

      console.log("✅ Employees response:", employees);
      res.json(employees);
    }
  );
});

module.exports = router;
