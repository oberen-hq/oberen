const axios = require("axios");

const url = "http://localhost:3001/api/organization/create";

axios
  .post(url, {
    name: "OrganizationName",
    email: "thealfiephillips@gmail.com",
    number: "07737817933",
    region: "GB",
    postcode: "TR26 2JE",
    description:
      "iofgeuifghjeiofgjeoifgjeriofghjeiogjeiogfjeiogjeiofgjeiogjeiogjeiogfjeiogjeoigje",
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
