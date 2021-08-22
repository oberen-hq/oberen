// IMPORTS

const router = require("express").Router();
const auth = require("../../middleware/auth");
const { get_post, create_post } = require("../../controllers/Post/post");

// Get a post by id

router.get("/:id", auth, get_post);

// Create a post

router.post("/", create_post);

module.exports = router;
