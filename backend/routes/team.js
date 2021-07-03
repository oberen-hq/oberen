const router = require("express").Router();
const { create_team, get_team } = require("../controllers/team");

// Get a team

router.get("/:id", get_team);

// Create a team

router.post("/create", create_team);

module.exports = router;
