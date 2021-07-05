const mongoose = require("mongoose");

const ApplicationSchema = mongoose.Schema({
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
    type: String,
  },
});
