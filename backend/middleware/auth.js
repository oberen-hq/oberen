const jwt = require("jsonwebtoken");
const constant = require("../config/constants/constants");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    let decodedData;

    if (token) {
      // Local

      decodedData = jwt.verify(token, constant.jwt_secret());

      req.userId = decodedData?.id;
      req.isAuthenticated = true;
      next();
    }

    throw "Invalid Token";
  } catch (err) {
    res.status(401).json({
      status: 401,
      message: "Unauthenticated",
    });
  }
};

module.exports = auth;
