// IMPORTs

const dotenv = require("dotenv").config();

// Constant file for easy access to .env config

class Constant {
  constructor() {
    this._PORT = process.env.PORT;
    this._MONGO_URI = process.env.MONGO_URI;
    this._JWT_SECRET = process.env.JWT_SECRET;
    this._FILE_DESTINATION = process.env.FILE_DESTINATION;
    this._SENTRY_DSN = process.env.SENTRY_DSN;
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

  sentry_dsn() {
    return this._SENTRY_DSN;
  }
}

module.exports = new Constant();
