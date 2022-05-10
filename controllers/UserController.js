const UserService = require("../services/UserService");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json({
      users: users,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
