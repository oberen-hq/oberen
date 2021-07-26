// IMPORTS

const jwt = require("jsonwebtoken");
const constant = require("../config/constants/constants");

// Authentication for routes that have access to organizations and jobs.

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    let decodedData;

    if (token) {
      // Local

      decodedData = jwt.verify(token, constant.jwt_secret());
      req.userId = decodedData?.id;
    }

    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      status: 401,
      message: "Invalid Token.",
    });
  }
};

module.exports = auth;
