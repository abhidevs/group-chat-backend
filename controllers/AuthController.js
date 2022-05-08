const AuthService = require("../services/AuthService");
const UserService = require("../services/UserService");

exports.signupUser = async (req, res) => {
  try {
    const checkUser = await UserService.checkIfUserExists(req.body);
    if (checkUser) {
      res.status(403).json({ message: "User already exists!", success: false });
    } else {
      await AuthService.createUser(req.body);
      res.status(201).json({
        message: "Signed up successfully. Please login.",
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};