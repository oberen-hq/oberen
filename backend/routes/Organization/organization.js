const router = require("express").Router();
const {
  create_organization,
  get_organization,
} = require("../../controllers/Organization/organization");

// Get an organization

router.get("/:id", get_organization);

// Get an organisations available jobs

// Create an organization

router.post("/create", create_organization);

module.exports = router;
