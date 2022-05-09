const ChatMessage = require("../models/ChatMessage");
const User = require("../models/User");

exports.createChatMessage = async ({ body: { message }, user }) => {
  try {
    const msg = await user.createChatMessage({ message });
    await msg.save();
    return msg;
  } catch (error) {
    throw error;
  }
};

exports.getAllMessages = async () => {
  try {
    return await ChatMessage.findAll({
      include: [
        { model: User, as: "user", attributes: ["id", "name", "email"] },
      ],
    });
  } catch (error) {
    throw error;
  }
};
