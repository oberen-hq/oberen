const organization = require("../models/Organization");
const validator = require("validator");
const filter = require("leo-profanity");

// Get a organization

const get_organization = async (req, res) => {
  const organizationId = req.params.id;

  try {
    const organization = await Organization.findById(organizationId);

    if (!organization) {
      return res.status(404).json({
        message: "That Organization was not found!",
      });
    }

    return res.status(200).json({
      name: organization.name,
      email: organization.email,
      region: organization.region,
      postcode: organization.postcode,
      description: organization.description,
      offeringJobs: organization.offeringJobs,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};

// Create a organization

const create_organization = async (req, res) => {
  const { name, email, number, region, postcode, description } = req.body;

  const validEmail = validator.isEmail(email);
  const validNumber = validator.isMobilePhone(number);
  const validPostcode = validator.isPostalCode(postcode, ["GB", "US"]);

  if (name.length < 4 || name.length > 25) {
    return res.status(400).json({
      message: "Name must be 4-25 characters!",
    });
  }

  if (description.length < 10 || description.length > 500) {
    return res.status(400).json({
      message: "Description must be 10-500 characters!",
    });
  }

  if (filter.check(description)) {
    return res.status(400).json({
      message: "Bad profanity detected in description.",
    });
  }

  if (filter.check(name)) {
    return res.status(400).json({
      message: "Bad profanity detected in organization name.",
    });
  }

  if (!validEmail) {
    return res.status(400).json({
      message: "Please provide a valid email address.",
    });
  }

  if (!validNumber) {
    return res.status(400).json({
      message: "Please provide a valid phone number.",
    });
  }

  if (!validPostcode) {
    return res.status(400).json({
      message: "Please provide a valid postcode. GB OR US",
    });
  }

  try {
    const existingOrganization = await Organization.findOne({ name: name });

    if (existingOrganization) {
      return res.status(409).json({
        message: "A organization with that name already exists!",
      });
    }

    const creatorId = req.userId;

    const result = await Organization.create({
      creatorId,
      name,
      email,
      number,
      region,
      description,
    });

    return res.status(200).json({
      result,
      message: "Organization created!",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};

// Edit a organization

const edit_organization = async (req, res) => {
  return;
};

// Delete a organization

const delete_organization = async (req, res) => {
  return;
};

module.exports = { create_organization, get_organization };
