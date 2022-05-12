const express = require("express");

const UserController = require("../controllers/UserController");
const { authenticateToken } = require("../middleware/authenticateUser");

const router = express.Router();

router.get("/search", authenticateToken, UserController.searchUsers);

module.exports = router;
