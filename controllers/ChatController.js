const ChatService = require("../services/ChatService");

exports.createMessage = async (req, res) => {
  try {
    await ChatService.createMessage(req);
    res.status(201).json({
      message: "Message saved succesfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.getAllMessages = async (req, res) => {
  try {
    const allMsgs = await ChatService.getAllMessages();
    res.status(200).json({
      messages: allMsgs,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.getNewMessages = async (req, res) => {
  try {
    const lastMsgId = req.query.lastMessageId || -1;
    const newMsgs = await ChatService.getNewMessages(req.user, lastMsgId);
    return res.status(200).json({
      messages: newMsgs,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
