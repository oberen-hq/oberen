const jwt = require("jsonwebtoken");
const config = require("../config/constants/constants");
const dotenv = require("dotenv").config();

module.exports = (id, name, email) => {
  const token = jwt.sign(
    {
      id: id,
      name: name,
      email: email,
    },
    config.jwt_secret(),
    {
      expiresIn: "8h",
    }
  );

  return token;
};
