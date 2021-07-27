// IMPORTS

const mongoose = require("mongoose");

// Conversation between the employer and the client, option to add extra employer to conversation will be available.

const ConversationSchema = new mongoose.Schema(
  {
    job: {
      type: Object,
      required: true,
    },
    members: {
      type: Array,
      required: true,
    },
    messages: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Conversation", ConversationSchema);
