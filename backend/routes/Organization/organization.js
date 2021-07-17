// IMPORTS

const router = require("express").Router();
const {
  create_organization,
  get_organization,
} = require("../../controllers/Organization/organization");

const { create_organization_job } = require("../../controllers/Job/job");
const { get_organization_jobs } = require("../../controllers/Job/jobs");

const auth = require("../../middleware/auth");

// Get an organization

router.get("/:id", auth, get_organization);

// Get an organisations available jobs

router.get("/:id/jobs", auth, get_organization_jobs);

// Create an organization

router.post("/create", create_organization);

// Create an organization job

router.post("/:id/jobs/create", auth, create_organization_job);

module.exports = router;
