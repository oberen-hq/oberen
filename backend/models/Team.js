const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      min: 5,
      max: 30,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      min: 5,
      max: 30,
    },
    number: {
      type: String,
      require: true,
      min: 5,
      max: 20,
    },
    region: {
      type: String,
      default: "Not set.",
    },
    description: {
      type: String,
      default: "There is no description yet!",
    },
    members: {
      type: Array,
      default: [],
    },
    teamGroups: {
      type: Array,
      default: [],
    },
    conversations: {
      type: Array,
      default: [],
    },
    roles: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Team", TeamSchema);
