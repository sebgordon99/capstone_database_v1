"use strict";
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

const connectPostgreSQL = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      `Successful connection to PostgreSQL Database ${process.env.DB_NAME}`
    );
  } catch (error) {
    console.error("Unable to connect to PostgreSQL database:", error);
    process.exit(1);
  }
};

connectPostgreSQL();

module.exports = {
  Sequelize: sequelize,
};
