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
    console.error(err);
    return res.status(500).json({
      type: "Post",
      message: "Internal Server Error.",
    });
  }
};

const create_post = async (req, res) => {
  const post = req.body;

  const creatorId = req.userId;

  // TODO: Validation checks for profanity

  try {
    const result = await Post.create({
      creatorId: creatorId,
      title: post.title,
      description: post.description,
      organizationAttachments: post.organizationAttachments,
      jobAttachments: post.jobAttachments,
      shiftAttachments: post.shiftAttachments,
      fileAttachments: post.fileAttachments,
      likes: [],
      comments: [],
      shares: [],
    });

    return res.status(200).json({
      result,
      message: "Post created.",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      type: "Post",
      message: "Internal Server Error.",
    });
  }
};

module.exports = { get_post, create_post };
