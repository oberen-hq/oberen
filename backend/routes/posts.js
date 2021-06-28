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

// Delete a post

router.delete("/:id", async (req, res) => {
  try {
    const post = Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json({
        message: "The Post has been deleted.",
      });
    } else {
      res.status(403).json({
        type: "Post",
        message: "You can only delete your posts.",
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Like / Dislike a post

router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("The post has been disliked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a post

router.get("/:id", async (req, res) => {
  try {
    const post = Post.findById(req.params.id);
    if (!post) {
      res.status(404).json({
        type: "Post",
        message: "This post was not found.",
      });
    } else {
      res.status(200).json(post);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all timeline posts

router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser.id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.status(200).json(userPosts.concat(...friendPosts));
  } catch (err) {
    res.status(500).json(err);
  }
});
