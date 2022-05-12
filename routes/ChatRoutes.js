const express = require("express");
const fileUpload = require('express-fileupload');

const ChatController = require("../controllers/ChatController");
const { authenticateToken } = require("../middleware/authenticateUser");

const router = express.Router();

router.post("/message", authenticateToken, ChatController.createMessage);

router.post("/media", authenticateToken, fileUpload(), ChatController.createMedia);

router.get("/message/all", authenticateToken, ChatController.getAllMessages);

router.get("/message/new", authenticateToken, ChatController.getNewMessages);

module.exports = router;
