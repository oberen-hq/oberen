// IMPORTS

const mongoose = require("mongoose");

// Schema for user applications to organizations

const ApplicationSchema = mongoose.Schema(
  {
    applicant: {
      type: Object,
      require: true,
    },
    job: {
      type: Object,
      require: true,
    },
    whatYouDo: {
      type: String,
      required: true,
      min: 20,
      max: 500,
    },
    aspirations: {
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
