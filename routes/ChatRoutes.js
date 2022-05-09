const express = require("express");

const ChatController = require("../controllers/ChatController");
const { authenticateToken } = require("../middleware/authenticateUser");

const router = express.Router();

router.post("/send-message", authenticateToken, ChatController.createChatMessage);

module.exports = router;
