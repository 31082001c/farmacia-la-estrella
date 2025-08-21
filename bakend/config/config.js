require("dotenv").config();

const config = {
  port: process.env.PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  secret: process.env.SECRET,
  dialect: "mysql",
};

module.exports = { config };