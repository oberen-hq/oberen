// IMPORTS

const mongoose = require("mongoose");

// Referencing to the individual conversation, with socketIO there is client and employee communication..

// Also messages can include files for sharing documents. But - there will also be an application section for this.

const MessageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: String
      required: true,
    },
    senderId: {
      type: String
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
      required: true,
    },
    file: {
      type: String,
      default: "",
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
