const axios = require("axios");
const config = require("../config");

module.exports = async (options) => {
  return await axios.post(`${config.baseUrl}/auth/login`, options);
};
