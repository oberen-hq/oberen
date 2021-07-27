// IMPORTS

const mongoose = require("mongoose");
const validator = require("validator");
const filter = require("leo-profanity");

// Referencing the creatorId, they can also add other employers to the organization to hire clients

// offeringJobs has a maximum of 5, plan for this to be a payed feature in the future.

const OrganizationSchema = new mongoose.Schema(
  {
    creator: {
      type: Object,
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
      validate(value) {
        if (filter.check(value)) {
          throw new Error("Bad profanity detected!");
        }
      },
    },
    email: {
      type: String,
      require: true,
      min: 5,
      max: 30,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Please enter a valid email!");
        }
      },
    },
    number: {
      type: String,
      require: true,
      min: 5,
      max: 20,
      validate(value) {
        if (!validator.isMobilePhone(value)) {
          throw new Error("Please enter a valid phone number!");
        }
      },
    },
    region: {
      type: String,
      require: true,
    },
    postcode: {
      type: String,
      require: true,
      validate(value) {
        if (!validator.isPostalCode(value, "GB")) {
          throw new Error("Please enter a valid postal code!");
        }
      },
    },
    description: {
      type: String,
      required: true,
      min: 50,
      max: 2000,
      validate(value) {
        if (filter.check(value)) {
          throw new Error("Bad profanity detected!");
        }
      },
    },
    offeringJobs: {
      type: Array,
      default: [],
      max: 5,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Organization", OrganizationSchema);
