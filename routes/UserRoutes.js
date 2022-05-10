const express = require("express");

const UserController = require("../controllers/UserController");
const { authenticateToken } = require("../middleware/authenticateUser");

const router = express.Router();

router.get("/all", authenticateToken, UserController.getAllUsers);

module.exports = router;
