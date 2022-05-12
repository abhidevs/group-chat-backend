const { Op } = require("sequelize");
const Media = require("../models/Media");
const Message = require("../models/Message");
const User = require("../models/User");

exports.createMessage = async ({ body: { message, roomId }, user }) => {
  try {
    const msg = await user.createMessage({ message, roomId });
    await msg.save();
    return msg;
  } catch (error) {
    throw error;
  }
};

exports.createMedia = async ({ body: { roomId, type, mediaUrl }, user }) => {
  try {
    const msg = await user.createMessage({ roomId, message: "media" });
    await msg.createMedia({ url: mediaUrl, type });
    await msg.save();
    return msg;
  } catch (error) {
    throw error;
  }
};

exports.getAllMessages = async () => {
  try {
    return await Message.findAll({
      include: [
        { model: User, as: "user", attributes: ["id", "name", "email"] },
      ],
    });
  } catch (error) {
    throw error;
  }
};

exports.getNewMessages = async (user, lastMsgId) => {
  try {
    const rooms = await user.getRooms();
    const roomIds = rooms.map((room) => room.id);
    // console.log(roomIds);

    return await Message.findAll({
      where: { roomId: roomIds, id: { [Op.gt]: lastMsgId } },
      include: [
        { model: User, as: "user", attributes: ["id", "name", "email"] },
        { model: Media, as: "media", attributes: ["id", "type", "url"] },
      ],
    });
  } catch (error) {
    throw error;
  }
};
