const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

module.exports = function () {
  mongoose.connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("Connected to Database!");
    }
  );
};
