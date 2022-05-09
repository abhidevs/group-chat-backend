const UserService = require("../services/UserService");
const jwtToken = require("../utils/jwtToken");

exports.authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null)
    return res.status(401).json({ message: "Invalid token!", success: false });

  const userObj = await jwtToken.verifyToken(token).catch((err) => {
    return res.status(403).json({ message: "Invalid token!", success: false });
  });

  const user = await UserService.findUserById(userObj.id).catch((err) => {
    if (err || user === null)
      return res
        .status(403)
        .json({ message: "Invalid token!", success: false });
  });

  req.user = user;
  next();
};
