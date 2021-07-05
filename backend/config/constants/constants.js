const dotenv = require("dotenv").config();

class Constant {
  constructor() {
    this._PORT = process.env.PORT;
    this._MONGO_URI = process.env.MONGO_URI;
    this._JWT_SECRET = process.env.JWT_SECRET;
    this._FILE_DESTINATION = process.env.FILE_DESTINATION;
  }

  port() {
    return this._PORT;
  }

  mongo_uri() {
    return this._MONGO_URI;
  }

  jwt_secret() {
    return this._JWT_SECRET;
  }

  image_path() {
    return this._FILE_DESTINATION;
  }
}

module.exports = new Constant();
