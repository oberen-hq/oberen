const Organization = require("../../models/Organization");
const Job = require("../../models/Job");
const filter = require("leo-profanity");

const create_organization_job = async (req, res) => {
  const organizationId = req.params.id;
  const { name, industry, description, starsRequired, experienceRequired } =
    req.body;

  if (name.length <= 4 || name.length >= 15) {
    return res.status(400).json({
      message: "Job name length must be 4-15 characters.",
    });
  }

  if (filter.check(name)) {
    return res.status(400).json({
      message: "Bad profanity detected in the job name.",
    });
  }

  if (filter.check(description)) {
    return res.status(400).json({
      message: "Bad profanity detected in the job name.",
    });
  }

  try {
    const organization = await Organization.findById(organizationId);
    const currentJobs = organization.offeringJobs;

    for (let index = 0; index < currentJobs.length; index++) {
      const jobName = currentJobs[index].name;

      if (jobName === name) {
        return res.status(409).json({
          message: "That job name has already been taken in this organization",
        });
      }
    }

    if (currentJobs.length >= 5) {
      return res.status(400).json({
        message: "You can't add more than 5 jobs!",
      });
    }

    const newJob = await Job.create({
      organizationId: organization.id,
      creatorId: req.userId,
      name: name,
      industry: industry,
      description: description,
      starsRequired: starsRequired,
      experienceRequired: experienceRequired,
    });

    const result = await Organization.updateOne(
      { _id: organization.id },
      { $push: { offeringJobs: newJob } }
    );

    return res.status(200).json({
      message: "Job created!",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};

module.exports = { create_organization_job };
