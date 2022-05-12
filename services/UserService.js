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

exports.searchUsers = async ({ query: { name, email, phone } }) => {
  try {
    if (name) {
      console.log(name);
      return await User.findAll({
        where: {
          name: {
            [Op.like]: `${name}%`,
          },
        },
        attributes: ["id", "name", "email"],
      });
    } else if (email) {
      return await User.findAll({
        where: { email },
        attributes: ["id", "name", "email"],
      });
    } else {
      return await User.findAll({
        where: { phone },
        attributes: ["id", "name", "email"],
      });
    }
  } catch (error) {
    throw error;
  }
};
