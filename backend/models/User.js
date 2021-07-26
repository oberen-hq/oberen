// IMPORTS

const mongoose = require("mongoose");

// User schema, more will be added here soon as I understand the whole system.

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    industries: { type: Array, default: [], min: 0, max: 5 },
    chosenPositions: { type: Array, default: ["Employee"], min: 1, max: 2 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
