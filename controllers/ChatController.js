const ChatService = require("../services/ChatService");

exports.createChatMessage = async (req, res) => {
  try {
    await ChatService.createChatMessage(req);
    res.status(201).json({
      message: "Message saved succesfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
