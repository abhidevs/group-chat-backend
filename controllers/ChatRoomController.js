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

exports.getMyChatRooms = async (req, res) => {
  try {
    const allRooms = await ChatRoomService.getMyChatRooms(req);
    res.status(200).json({
      rooms: allRooms,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.getParticipantsByRoom = async (req, res) => {
  try {
    const { roomId } = req.query;
    const participants = await ChatRoomService.getParticipants(+roomId);

    res.status(200).json({
      participants: participants,
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
    const participant = await ChatRoomService.getParticipant(
      req.user.id,
      roomId
    );

    if (!participant?.isAdmin) {
      return res.status(403).json({
        message: "Only group admins are allowed to do this.",
        success: false,
      });
    }

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

exports.removeParticipantFromRoom = async (req, res) => {
  try {
    const { roomId, userId } = req.query;
    const participant = await ChatRoomService.getParticipant(
      req.user.id,
      roomId
    );

    if (!participant?.isAdmin) {
      return res.status(403).json({
        message: "Only group admins are allowed to do this.",
        success: false,
      });
    }

    await ChatRoomService.deleteParticipant(roomId, userId);
    res.status(201).json({
      message: "removed participant successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.addAdmin = async (req, res) => {
  try {
    const { roomId, userId } = req.body;
    const participant = await ChatRoomService.getParticipant(
      req.user.id,
      roomId
    );

    if (!participant?.isAdmin) {
      return res.status(403).json({
        message: "Only group admins are allowed to do this.",
        success: false,
      });
    }

    await ChatRoomService.makeAdmin(roomId, userId);
    res.status(201).json({
      message: "Added admin successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
