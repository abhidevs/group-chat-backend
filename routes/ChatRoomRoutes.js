const express = require("express");

const ChatRoomController = require("../controllers/ChatRoomController");
const { authenticateToken } = require("../middleware/authenticateUser");

const router = express.Router();

router.post("/create", authenticateToken, ChatRoomController.createChatRoom);

router.get("/all", authenticateToken, ChatRoomController.getAllChatRooms);

router.post("/add-participants", authenticateToken, ChatRoomController.addParticipantsToRoom);

module.exports = router;
