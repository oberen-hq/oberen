const mongoose = require("mongoose");

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
