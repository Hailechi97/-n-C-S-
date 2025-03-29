const express = require("express");
const mysql = require("mysql");
const con = require("../config/db");

const router = express.Router();

function formatTime(dateTime) {
  console.log("dateTime:", dateTime); // Thêm console.log
  if (!dateTime) return "";
  const date = new Date(dateTime);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${hours}:${minutes} - ${day}/${month}/${year}`;
}

router.get("/meetings", (req, res) => {
  con.query(
    "SELECT Title, StartTime, Content FROM Meetings",
    (err, results) => {
      if (err) {
        console.error("Lỗi truy vấn:", err);
        return res.status(500).json({ message: "Lỗi server" });
      }
      const meetings = results.map((meeting) => ({
        ...meeting,
        FormattedStartTime: formatTime(meeting.StartTime),
      }));
      console.log("meetings:", meetings); // Thêm console.log
      res.json(meetings);
    }
  );
});

router.get("/employees", (req, res) => {
  con.query(
    "SELECT FirstName, LastName, ChucVu, Status FROM Employees",
    (err, results) => {
      if (err) {
        console.error("Lỗi truy vấn:", err);
        return res.status(500).json({ message: "Lỗi server" });
      }
      res.json(results);
    }
  );
});

module.exports = router;
