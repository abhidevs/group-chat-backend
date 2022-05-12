const jwt = require("jsonwebtoken");

exports.generateAccessToken = (user) => {
  return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: "7d" });
};

exports.verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    return jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) reject(err);
      else resolve(user);
    });
  });
};

exports.decodeToken = (token) => {
  return jwt.decode(token);
};
