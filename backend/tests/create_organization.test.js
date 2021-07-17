const axios = require("axios");

const url = "http://localhost:3001/api/organization/create";

axios
  .post(
    url,
    {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRoZWFsZmllcGhpbGxpcHNAZ21haWwuY29tIiwiaWQiOiI2MGYwMDljY2FmNDE1NTUzZTg4YTEzNTciLCJpYXQiOjE2MjY0MTg2NDMsImV4cCI6MTYyNjQ0NzQ0M30.oybumaeqIhbPEF1rqEWjuo7Zct0gLmYITfTZdYHmVrg",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
    {
      employers: ["example", "another example"],
      name: "OrganizationNam",
      email: "thealfiephillips@gmail.com",
      number: "07737817933",
      region: "GB",
      postcode: "TR26 2JE",
      description:
        "iofgeuifghjeiofgjeoifgjeriofghjeiogjeiogfjeiogjeiofgjeiogjeiogjeiogfjeiogjeoigje",
    }
  )
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
