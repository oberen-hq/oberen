const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const validator = require("validator");
const filter = require("leo-profanity");

const secret = process.env.JWT_SECRET;

const User = require("../models/User");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });

    if (!existingUser) {
      return res.status(404).json({
        message: "User does not exist",
      });
    }

    const correct = await bcrypt.compare(password, existingUser.password);

    if (!correct) {
      return res.status(400).json({
        message: "Invalid Credentials.",
      });
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      secret,
      {
        expiresIn: "1h",
      }
    );

    return res.status(200).json({
      result: existingUser,
      token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};

const register = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  const validEmail = validator.isEmail(email);
  const validPassword = validator.isStrongPassword(password, {
    minLength: 8,
  });

  if (firstName.length <= 2 || firstName.length > 15) {
    return res.status(400).json({
      message: "First name must be above 2-15 characters!",
    });
  }

  if (lastName.length <= 4 || lastName.length > 30) {
    return res.status(400).json({
      message: "Last name must be 4-30 characters!",
    });
  }

  if (
    filter.check(email) ||
    filter.check(firstName) ||
    filter.check(lastName)
  ) {
    return res.status(400).json({
      message: "Bad profanity detected.",
    });
  }

  if (!validEmail) {
    return res.status(400).json({
      message: "Please provide a valid email address.",
    });
  }

  if (!validPassword) {
    return res.status(400).json({
      message: "Password is not strong enough. Please use 8 characters.",
    });
  }

  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists.",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Passwords do not match.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign(
      {
        email: result.email,
        id: result._id,
      },
      secret,
      {
        expiresIn: "1h",
      }
    );

    return res.status(200).json({
      result,
      token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};

const edit_user = async (req, res) => {
  return;
};

const delete_user = async (req, res) => {
  const { email, confirmation } = req.body;

  const requestedUser = await User.findOne({ email: email });
  const currentUser = await User.findById(res.locals.userId);

  if (currentUser._id !== requestedUser._id) {
    return res.status(400).json({
      message: "Unauthorized to delete another users account",
    });
  }

  if (confirmation === false) {
    return res.status(499).json({
      confirmation,
      message: "Cancelled deleting account",
    });
  }

  try {
    await User.deleteOne(requestedUser);
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }

  return res.status(204).json({
    message: "Account deleted.",
  });
};

module.exports = { register, login, delete_user };
