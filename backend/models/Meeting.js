const mongoose = require("mongoose");

const MeetingSchema = mongoose.Schema({
  meetingId: {
    type: String,
    required: true,
    unique: true,
  },
  members: {
    type: Array,
    default: [],
  },
  messages: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Meeting", MeetingSchema);
