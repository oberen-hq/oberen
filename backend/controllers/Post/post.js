// IMPORTS

const Post = require("../../models/Post");
const validator = require("validator");
const filter = require("leo-profanity");

// Get a post

const get_post = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({
        type: "Post",
        message: "Post not found.",
      });
    }

    return res.status(200).json({
      post,
    });
  } catch (err) {
    return res.status(500).json({
      type: "Post",
      message: "Internal Server Error.",
    });
  }
};
