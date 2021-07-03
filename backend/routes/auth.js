const router = require("express").Router();
const { register, login } = require("../controllers/user");

// Register a user

router.post("/register", register);

// Login a user

router.post("/login", login);

module.exports = router;
