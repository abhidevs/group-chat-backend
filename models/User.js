const { DataTypes } = require("sequelize");

const sequelize = require("../utils/db");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  phone: { type: DataTypes.STRING, unique: true, defaultValue: "" },
  password: { type: DataTypes.STRING, defaultValue: "" },
});

module.exports = User;
