const axios = require("axios");

const url =
  "http://localhost:3001/api/organization/60e1eefa73956c1da04513b8/jobs/create";

axios
  .post(url, {
    name: "Job name here",
    industry: "Catering",
    description: "Catering services lol text i dont know text",
    starsRequired: 3,
    experienceRequired: "5 years",
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
