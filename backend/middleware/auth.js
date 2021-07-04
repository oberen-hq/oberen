const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const secret = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      // Local

      try {
        decodedData = jwt.verify(token, secret);
      } catch (err) {
        next(err);
      }

      req.userId = decodedData?.id;
      req.isAuthenticated = true;
    } else {
      // Google

      try {
        decodedData = jwt.decode(token);
      } catch (err) {
        next(err);
      }

      req.userId = decodedData?.sub;
      req.isAuthenticated = true;
    }

    next();
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = auth;
