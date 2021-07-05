// IMPORTS

const mongoose = require("mongoose");

// Schema for user applications to organizations

const ApplicationSchema = mongoose.Schema(
  {
    applicantId: {
      type: String,
      require: true,
    },
    jobId: {
      type: String,
      require: true,
    },
    describeInThreeWords: {
      type: Array,
      required: true,
      min: 3,
      max: 3,
    },
    whatYouDo: {
      type: String,
      required: true,
      min: 20,
      max: 500,
    },
    aspirtations: {
      type: Array,
      required: true,
    },
    describeYourself: {
      type: String,
      required: true,
      min: 20,
      max: 500,
    },
    other: {
      type: String,
      max: 1000,
    },
  },
  { timestamps: true }
);
