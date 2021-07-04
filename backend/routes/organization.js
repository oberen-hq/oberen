const router = require("express").Router();
const {
  create_orginization,
  get_orginization,
} = require("../controllers/orginization");

// Get a team

router.get("/:id", get_orginization);

// Create a team

router.post("/create", create_orginization);

module.exports = router;
