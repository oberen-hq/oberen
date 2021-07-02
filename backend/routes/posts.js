const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

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

router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json({
        message: "Your post has been updated.",
      });
    } else {
      res.status(403).json({
        type: "Post",
        message: "You can only update your post.",
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Deleting a post

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json({
        message: "The post has been deleted.",
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

// Like or dislike a post

router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.userId === req.body.userId) {
      res.status(403).json({
        type: "Liking and Disliking",
        message: "You can't like your own post.",
      });
    }

    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json({
        message: "The post has been liked.",
      });
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json({
        message: "The post has been disliked.",
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Creating a comment

router.post("/:id/comment/add", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    let comment = req.body;

    await post.updateOne({ $push: { comments: comment } });

    return res.status(200).json({
      message: "You have successfully created a comment.",
    });
  } catch (err) {
    return res.status(500).json({
      type: "Comment",
      message: "Error adding your comment, please try again.",
    });
  }
});

// Updating a comment

router.put("/:id/comment/:commentId", async (req, res) => {
  try {
    const post = Post.findById(req.params.id);

    for (comment in post.comments) {
      if (comment.id === req.params.commentId) {
        await post.updateOne({ comments: { $set: { comment: req.body } } });

        return res.status(200).json({
          message: "Your comment has been updated.",
        });
      }
    }

    return res.status(404).json({
      type: "Comment",
      message: "Couldn't find a comment with that id.",
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Deleting a comment

router.delete("/:id/comment/delete", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    let commentId = req.body.id;

    for (comment in post.comments) {
      if (commentId === comment.id) {
        await post.deleteOne({ $pull: { comments: comment } });
        return res.status(200).json({
          message: "Your comment has been deleted.",
        });
      }
    }
  } catch (err) {
    return res.status(500).json({
      type: "Comment",
      message: "Your comment could not be deleted at this time.",
    });
  }
});

// Get a single post

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get timeline posts

router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
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

// Get all user posts

router.get("/profile/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const posts = await Post.find({ userId: user._id });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
