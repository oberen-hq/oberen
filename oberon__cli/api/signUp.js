const axios = require("axios");
const bcrypt = require("bcrypt");
const config = require("../config");

module.exports = async (options) => {
  const salt = await bcrypt.genSalt(10);
  options.password = await bcrypt.hash(options.password, salt);
  return await axios.post(`${config.baseUrl}/auth/register`, options);
};
