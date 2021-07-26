// IMPORTS

const Organization = require("../../models/Organization");
const validator = require("validator");
const filter = require("leo-profanity");

// Get an organization

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

  const existingOrganization = await Organization.exists({ name: name });

  if (existingOrganization) {
    return res.status(409).json({
      message: "An organization with that name already exists!",
    });
  }

  const creatorId = req.userId;
  const employers = ["test", "test2"];

  try {
    const result = await Organization.create({
      creatorId,
      employers,
      name,
      email,
      number,
      region,
      postcode,
      description,
    });

    res.status(200).json({
      result,
      message: "Organization created!",
    });
  } catch (err) {
    res.status(500).json({
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
