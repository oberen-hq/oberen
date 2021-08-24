const router = require("express").Router();
const { get_jobs } = require("../../controllers/Job/jobs");

router.get("/", get_jobs);

module.exports = router;
