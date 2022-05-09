const { DataTypes } = require("sequelize");

const sequelize = require("../utils/db");

const ChatMessage = sequelize.define("chatMessage", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  message: { type: DataTypes.STRING, allowNull: false },
});

module.exports = ChatMessage;
