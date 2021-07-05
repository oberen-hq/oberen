// IMPORTS

const mongoose = require("mongoose");

// The shift schema will not need a creator id since it is not needed. A basic structure that has the starting time and finishing time

// + Feedback and required rating from the one of the employers after the shift is finished

const ShiftSchema = mongoose.Schema(
  {
    startingTime: {
      type: Date,
      required: true,
    },
    finishingTime: {
      type: Date,
      required: true,
    },
    jobRole: {
      type: String,
      requiredd: true,
    },
    rating: {
      type: Number,
      require: true,
      min: 0,
      max: 5,
    },
    workerFeedback: {
      type: String,
      require: false,
    },
    employerFeedback: {
      type: String,
      require: false,
    },
  },
  { timestamps: true }
);
