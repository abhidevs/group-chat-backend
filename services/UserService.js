const User = require("../models/User");
const { Op } = require("sequelize");

exports.checkIfUserExists = async ({ email, phone }) => {
  try {
    if (phone) {
      return await User.findOne({
        where: {
          [Op.or]: [{ email }, { phone }],
        },
      });
    } else {
      return await User.findOne({
        where: {
          email,
        },
      });
    }
  } catch (error) {
    throw error;
  }
};

exports.findUserById = async (id) => {
  return await User.findByPk(id);
};

exports.getAllUsers = async () => {
  try {
    return await User.findAll({ attributes: ["id", "name", "email"] });
  } catch (error) {
    throw error;
  }
};
