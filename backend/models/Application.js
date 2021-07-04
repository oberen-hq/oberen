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
});
