const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    friendRequests: {
      type: Array,
      default: [],
    },
    messagesNotifications: {
      type: Array,
      default: [],
    },
    pushNotifications: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 50,
      default: "Still waiting to be told.",
    },
    city: {
      type: String,
      max: 50,
      default: "Who knows?",
    },
    from: {
      type: String,
      max: 50,
      default: "The Unknown",
    },
    relationship: {
      type: Number,
      enum: [1, 2, 3],
      default: 1,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
