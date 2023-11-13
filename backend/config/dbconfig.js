const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("dbname", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
