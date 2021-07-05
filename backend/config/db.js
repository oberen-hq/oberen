const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const createMongooseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
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
