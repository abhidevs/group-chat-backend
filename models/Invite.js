const { DataTypes } = require("sequelize");

const sequelize = require("../utils/db");

const Invite = sequelize.define("invite", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
});

module.exports = Invite;
