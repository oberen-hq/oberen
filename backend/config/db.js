const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDB = () => {
  mongoose.connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("Connected to Database!");
    }
  );
};

const serverStatus = () => {
  return mongoose.connection.readyState;
};

module.exports = { connectDB, serverStatus };
