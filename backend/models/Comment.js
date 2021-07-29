// IMPORTS

const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      min: 10,
      max: 500,
    },
    likes: {
      type: Array,
      default: [],
    },
    shares: {
      type: Array,
      default: [],
    },
    replies: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
