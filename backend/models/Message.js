// IMPORTS

const mongoose = require("mongoose");

// Referencing to the individual conversation, with socketIO there is client and employee communication..

// Also messages can include files for sharing documents. But - there will also be an application section for this.

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
