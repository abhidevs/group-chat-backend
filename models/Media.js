const { DataTypes } = require("sequelize");

const sequelize = require("../utils/db");

const Media = sequelize.define("media", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  url: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Media;
