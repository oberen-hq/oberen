// IMPORTS

const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    creatorId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      min: 5,
      max: 30,
    },
    description: {
      type: String,
      required: true,
      min: 20,
      max: 2000,
    },
    organizationAttachments: {
      type: Array,
      required: false,
    },
    jobAttachments: {
      type: Array,
      required: false,
    },
    shiftAttachments: {
      type: Array,
      required: false,
    },
    fileAttachments: {
      type: Array,
      required: false,
    },
    likes: {
      type: Array,
      default: [],
    },
    comments: {
      type: Array,
      default: [],
    },
    shares: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Post", PostSchema);
