const axios = require("axios");

const url = "http://localhost:3001/api/team/create";

axios
  .post(url, {
    name: "Thisismyteamname",
    email: "thealfiephillips@gmail.com",
    number: "07737817933",
    region: "GB",
    description:
      "iofgeuifghjeiofgjeoifgjeriofghjeiogjeiogfjeiogjeiofgjeiogjeiogjeiogfjeiogjeoigje",
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
