const ChatService = require("../services/ChatService");
const AWSS3Service = require("../services/AWSS3Service");

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

exports.createMedia = async (req, res) => {
  try {
    const file = req.files.media;
    const mediaType = file?.mimetype.split("/")[0];
    const mediaExt = file?.mimetype.split("/")[1];
    console.log({ file, mediaType });

    const { roomId } = req.body;
    const filename = `${mediaType}s/${roomId}/${Date.parse(
      new Date()
    )}.${mediaExt}`;
    const fileURL = await AWSS3Service.uploadToS3(filename, file.data);
    // console.log(fileURL);

    req.body.mediaUrl = fileURL;
    req.body.type = mediaType;

    await ChatService.createMedia(req);
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
