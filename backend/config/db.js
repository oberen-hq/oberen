const mongoose = require("mongoose");
const config = require("../config/constants/constants");

const createMongooseConnection = async () => {
  try {
    await mongoose.connect(config.mongo_uri(), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const serverStatus = () => {
  return mongoose.connection.readyState;
};

module.exports = { createMongooseConnection, serverStatus };
