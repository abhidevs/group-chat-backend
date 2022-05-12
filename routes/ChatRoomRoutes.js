const express = require("express");

const ChatRoomController = require("../controllers/ChatRoomController");
const { authenticateToken } = require("../middleware/authenticateUser");

const router = express.Router();

router.post("/create", authenticateToken, ChatRoomController.createChatRoom);

router.get("/all", authenticateToken, ChatRoomController.getMyChatRooms);

router.get("/participants", authenticateToken, ChatRoomController.getParticipantsByRoom);

router.post("/participants", authenticateToken, ChatRoomController.addParticipantsToRoom);

router.delete("/participants", authenticateToken, ChatRoomController.removeParticipantFromRoom);

router.post("/add-admin", authenticateToken, ChatRoomController.addAdmin);

module.exports = router;
