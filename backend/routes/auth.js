const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.get("/register", (req, res) => {
  console.log(req.sessionID);
  res.send("Register");
});

// Register a user

router.post("/register", async (req, res) => {
  try {
    // Generating a new hash

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Creating the user

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // Saving the user and sending response

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login a user

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(404).json({
        type: "User",
        message: "A user with that email was not found.",
      });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      res.status(400).json({
        type: "User",
        message: "Invalid password.",
      });
    }

    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
