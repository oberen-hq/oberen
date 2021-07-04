const Organization = require("../../models/Organization");

// Get all jobs

const get_jobs = async (req, res) => {
  return;
};

// Get all of organizations available jobs

const get_organization_jobs = async (req, res) => {
  const organizationId = req.params.id;
  let jobs = [];
  try {
    const organization = Organization.findById(organizationId);

    for (let index = 0; index < organization.offeringJobs.length; index++) {
      jobs.push(organization.offeringJobs[index]);
    }

    if (!job.length) {
      return res.status(200).json({
        data: "No currrent jobs.",
      });
    }

    return res.status(200).json({
      data: jobs,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};

module.exports = { get_organization_jobs };
