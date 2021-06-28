const Post = require("../models/Post");
const User = require("../models/User");
const router = require("express").Router();

// Create a post

router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a post

router.post("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json(post);
    } else {
      res.status(403).json({
        type: "Post",
        message: "You can only update your posts.",
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
