const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("pwf_development", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
