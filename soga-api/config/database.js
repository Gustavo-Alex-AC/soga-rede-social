// config/database.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("soga_bd", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
