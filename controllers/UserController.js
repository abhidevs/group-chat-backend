const UserService = require("../services/UserService");

exports.searchUsers = async (req, res) => {
  try {
    const users = await UserService.searchUsers(req);
    res.status(200).json({
      users: users,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
