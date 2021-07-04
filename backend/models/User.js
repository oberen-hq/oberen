const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    industries: { type: Array, default: [], min: 1, max: 20 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
