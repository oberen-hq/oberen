const Organization = require("../../models/Organization");

// Get all organizations

const get_organizations = async (req, res) => {
  try {
    const orgs = await Organization.find({});

    return res.status(200).json({
      data: orgs,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};

module.exports = { get_organizations };
