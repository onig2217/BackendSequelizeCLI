const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbconfig.js");

const User = sequelize.define("user", {
  firstname: DataTypes.STRING,
  lastname: DataTypes.STRING,
});

module.exports = User;
