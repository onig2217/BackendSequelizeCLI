const { Sequelize } = require("sequelize");
const User = require("./User");

exports.getAllUsers = (req, res, next) => {
  User.findAll().then((users) => {
    res.send(users);
  });
};
