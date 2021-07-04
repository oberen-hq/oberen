const mongoose = require("mongoose");

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
      required: true,
    },
    employeeId: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
