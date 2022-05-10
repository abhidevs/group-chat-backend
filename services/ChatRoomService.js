const Room = require("../models/Room");
const User = require("../models/User");

exports.createChatRoom = async ({ body: { name, type }, user }) => {
  try {
    const room = await user.createRoom({ name, type });
    await room.save();
    return room;
  } catch (error) {
    throw error;
  }
};

exports.getAllChatRooms = async ({ user }) => {
  try {
    return await user.getRooms();
  } catch (error) {
    throw error;
  }
};

exports.addParticipantsToRoom = async (roomId, userId) => {
  try {
    const room = await Room.findByPk(roomId);
    await room.addUser(userId);
  } catch (error) {
    throw error;
  }
};
