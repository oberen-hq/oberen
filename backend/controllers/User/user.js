// IMPORTS

const bcrypt = require("bcrypt");
const validator = require("validator");
const filter = require("leo-profanity");
const User = require("../../models/User");
const genToken = require("../../helpers/genToken");

// Login a user

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists

    const existingUser = await User.exists({ email: email });

    if (!existingUser)
      return res.status(404).json({
        error: "User",
        message: "User does not exist.",
      });

    // Compare password hashes

    const correct = await bcrypt.compare(password, existingUser.password);

    if (!correct)
      return res.status(400).json({
        error: "User",
        message: "Invalid password.",
      });

    // Generate JSON Web Token to be stored in local storage

    const token = genToken(
      existingUser._id,
      existingUser.name,
      existingUser.email
    );

    // Return token, not user data for E-E encryption

    return res.status(200).json({
      token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "User",
      message: "Internal Server Error.",
    });
  }
};

// Register a user

const register = async (req, res) => {
  const { email, password, name } = req.body;

  // Validation checks

  const isValidEmail = validator.isEmail(email);
  const strongPassword = validator.isStrongPassword(password, {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
  });

  if (!isValidEmail)
    return res.status(400).json({
      error: "User",
      message: "Invalid email, please try again.",
    });

  // if (!strongPassword)
  //   return res.status(400).json({
  //     error: "User",
  //     message: "Password must be over 8 characters long.",
  //   });

  if (filter.check(name))
    return res.status(400).json({
      error: "User",
      message: "Bad profanity detected in name.",
    });

  // Try, Catch statement for finding an existing user and creatiing a new one

  try {
    const existingUser = await User.exists({ email: email });

    if (existingUser) {
      return res.status(400).json({
        error: "User",
        message: "User already exists.",
      });
    }

    // Generate salt for hashing of password using bcrypt

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user

    const result = await User.create({
      email,
      password: hashedPassword,
      name,
    });

    // Generate JSON Web Token for local storage.

    const token = genToken(result._id, result.name, result.email);

    // Return token and not user data for E-E encryption.

    return res.status(200).json({
      message: "Token successfully generated.",
      token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "User",
      message: "Internal Server Error.",
    });
  }
};

// Get a user

const get_user = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({
        error: "User",
        message: "User not found.",
      });
    }

    const data = {
      id: user._id,
      name: user.name,
      email: user.email,
      industries: user.industries,
    };

    res.status(200).json({
      message: "Successfully fetched user.",
      data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "User",
      message: "Internal Server Error.",
    });
  }
};

// Edit a user

const edit_user = async (req, res) => {
  return;
};

// Delete a user

const delete_user = async (req, res) => {
  // Confirmation check box on frontend

  const { confirmation } = req.body;

  // Find the current user through headers

  const currentUser = await User.findById(req.userId);

  if (!confirmation) {
    return res.status(499).json({
      confirmation,
      message: "Cancelled deleting account",
    });
  }

  // Delete the user

  try {
    await User.deleteOne(currentUser);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      type: "User",
      message: "Internal Server Error.",
    });
  }

  // Return no data on delete

  return res.status(204);
};

module.exports = { register, login, delete_user };
