const { DataTypes } = require("sequelize");

const sequelize = require("../utils/db");

const ArchivedMessage = sequelize.define("ArchivedMessage", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  message: { type: DataTypes.STRING, allowNull: false },
});

module.exports = ArchivedMessage;
