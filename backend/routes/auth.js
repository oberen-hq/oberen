const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const passport = require("passport");

// Register a user

router.post("/register", async (req, res) => {
  User.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) {
      throw err;
    }

    if (doc) {
      res.send("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save();

    res.send("User created");
  });
});

// Login a user

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User exists");
    else {
      req.login(user, (err) => {
        if (err) throw err;
        res.send("Successfully authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

module.exports = router;
