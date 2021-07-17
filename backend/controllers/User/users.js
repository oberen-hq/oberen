// IMPORTS

const router = require("express").Router();
const User = require("../../models/User");

// Get users

const get_users = async (req, res) => {
  try {
    let users;
    if (Object.keys(req.query).length === 0) {
      users = await User.find({});

      return res.status(200).json({
        data: users,
      });
    } else {
      users = await User.find(req.query);

      if (!users) {
        return res.status(404).json({
          message: "No users found.",
        });
      }

      return res.status(200).json({
        data: users,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};

module.exports = router;
