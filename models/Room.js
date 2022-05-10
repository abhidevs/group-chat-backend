const { DataTypes } = require("sequelize");

const sequelize = require("../utils/db");

const Room = sequelize.define("room", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Room;
