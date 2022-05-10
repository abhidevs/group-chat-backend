const { DataTypes } = require("sequelize");

const sequelize = require("../utils/db");

const Message = sequelize.define("Message", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  message: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Message;
