const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: String,
    },
    senderId: {
      type: String,
      required: true,
    },
    senderSocketId: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      min: 1,
      max: 500,
    },
    file: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
