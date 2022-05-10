const { DataTypes } = require("sequelize");

const sequelize = require("../utils/db");

const Participant = sequelize.define("participant", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Participant;
