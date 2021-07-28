const axios = require("axios");

module.exports = async (options) => {
  if (!options.token.length) {
    return "No token provided.";
  }

  return await axios.get(`http://localhost:3001/protected`, {
    headers: options,
  });
};
