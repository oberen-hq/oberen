const mongoose = require("mongoose");

const GroupSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    members: {
      type: Array,
      default: [],
    },
    conversation: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);
