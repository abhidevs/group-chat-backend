const User = require("../models/User");
const encryptPass = require("../utils/encryptPass");

exports.createUser = async ({ name, email, phone, password }) => {
  try {
    let hashedPass = await encryptPass.hashPassword(password);

    const user = await User.create({
      name,
      email,
      phone,
      password: hashedPass,
    });
    await user.save();

    return user;
  } catch (error) {
    throw error;
  }
};
