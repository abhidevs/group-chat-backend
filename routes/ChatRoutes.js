const express = require("express");

const ChatController = require("../controllers/ChatController");
const { authenticateToken } = require("../middleware/authenticateUser");

const router = express.Router();

router.post("/message", authenticateToken, ChatController.createChatMessage);

router.get("/message/all", authenticateToken, ChatController.getAllMessages);

module.exports = router;
