const ChatRoomService = require("../services/ChatRoomService");

exports.createChatRoom = async (req, res) => {
  try {
    const room = await ChatRoomService.createChatRoom(req);
    res.status(201).json({
      message: "Room saved succesfully",
      room: room,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.getAllChatRooms = async (req, res) => {
  try {
    const allRooms = await ChatRoomService.getAllChatRooms(req);
    res.status(200).json({
      rooms: allRooms,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.addParticipantsToRoom = async (req, res) => {
  try {
    const { participants, roomId } = req.body;
    participants?.forEach(async (participant) => {
      await ChatRoomService.addParticipantsToRoom(roomId, participant);
    });
    res.status(201).json({
      message: "Added participants successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
