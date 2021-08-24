// IMPORTS

const mongoose = require("mongoose");

// Job schema for creating individual jobs as an organization

const JobSchema = new mongoose.Schema(
  {
    organizationId: {
      type: String,
      required: true,
    },
    creatorId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      min: 4,
      max: 15,
    },
    industry: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      min: 50,
      max: 2000,
    },
    starsRequired: {
      type: Number,
      default: 0,
    },
    experienceRequired: {
      type: String,
      default: "No experience required.",
    },
    shifts: {
      type: Array,
      required: false,
    },
    employee: {
      type: Object,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);