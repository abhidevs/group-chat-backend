const Participant = require("../models/Participant");
const Room = require("../models/Room");
const User = require("../models/User");

exports.createChatRoom = async ({ body: { name, type }, user }) => {
  try {
    const room = await user.createRoom(
      { name, type },
      { through: { isAdmin: true } }
    );
    await room.save();
    return room;
  } catch (error) {
    throw error;
  }
};

exports.getMyChatRooms = async ({ user }) => {
  try {
    return await user.getRooms();
  } catch (error) {
    throw error;
  }
};

exports.getParticipant = async (userId, roomId) => {
  try {
    return await Participant.findOne({ userId, roomId });
  } catch (error) {
    throw error;
  }
};

exports.getParticipants = async (roomId) => {
  try {
    const room = await Room.findByPk(roomId);
    return await room.getUsers({
      attributes: ["id", "name", "email"],
    });
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

exports.deleteParticipant = async (roomId, userId) => {
  try {
    return await Participant.destroy({ where: { userId, roomId } });
  } catch (error) {
    throw error;
  }
};

exports.makeAdmin = async (roomId, userId) => {
  try {
    return await Participant.update(
      { isAdmin: true },
      { where: { userId, roomId } }
    );
  } catch (error) {
    throw error;
  }
};
