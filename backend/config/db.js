// IMPORTS

const mongoose = require("mongoose");
const config = require("../config/constants/constants");

// Initializing mongoose connection, return a promise and makes sure the initialization of our app doesn't rely on the connection to start.

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

// Get connectivity status for mongodb

const serverStatus = () => {
  return mongoose.connection.readyState;
};

module.exports = { createMongooseConnection, serverStatus };
