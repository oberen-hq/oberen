const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {
    jobId: {
      type: String,
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
