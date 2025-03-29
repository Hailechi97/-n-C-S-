const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/users", authController.getAllUsers);
router.post("/users", authController.createUser);
router.put("/users/:id", authController.updateUser);
router.delete("/users/:id", authController.deleteUser);

module.exports = router;
