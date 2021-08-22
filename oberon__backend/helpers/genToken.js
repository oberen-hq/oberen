const jwt = require("jsonwebtoken");
const config = require("../config/constants/constants");
const dotenv = require("dotenv").config();

module.exports = (options) => {
  const token = jwt.sign(
    {
      id: options.id,
      name: options.name,
      email: options.email,
      number: options.number,
      bio: options.bio,
      profilePicture: options.profilePicture,
      gender: options.gender,
      website: options.website,
      verified: options.verified,
      followers: options.followers,
      following: options.following,
      roles: options.roles,
      status: options.status,
      settings: options.settings,
      isAdmin: options.isAdmin,
    },
    config.jwt_secret(),
    {
      expiresIn: "8h",
    }
  );

  return token;
};
