const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const secret = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (!token) {
      return next();
    }

    if (token && isCustomAuth) {
      // Local

      decodedData = jwt.verify(token, secret);

      req.userId = decodedData?.id;
    } else {
      // Google

      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next();
  } catch (err) {
    console.error(err);
  }
};

const isAtJob = async (req, res, next) => {
  try {
    return;
  } catch (err) {
    return;
  }
};

module.exports = auth;
