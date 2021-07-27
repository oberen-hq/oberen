// IMPORTS

const mongoose = require("mongoose");

// User schema, more will be added here soon as I understand the whole system.

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    number: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 1024,
    },
    bio: {
      type: String,
      default: "",
      max: 225,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Transgender", "Prefer not to say", "Undecided"],
      default: "Undecided",
    },
    website: {
      type: String,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    roles: {
      type: Array,
      default: [],
      max: 10,
    },
    status: {
      type: String,
      enum: ["ONLINE", "IDLE", "DND", "OFFLINE"],
      default: "ONLINE",
      required: true,
    },
    settings: {
      type: Object,
      required: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
