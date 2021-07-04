const mongoose = require("mongoose");

const OrganizationSchema = new mongoose.Schema(
  {
    creatorId: {
      type: String,
      required: true,
    },
    employers: {
      type: Array,
      default: [],
      required: true,
    },
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
      require: true,
    },
    postcode: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      required: true,
      min: 50,
      max: 2000,
    },
    offeringJobs: {
      type: Array,
      max: 5,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Organization", OrganizationSchema);
