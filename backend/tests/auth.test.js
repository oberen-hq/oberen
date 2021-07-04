const axios = require("axios");

let url = "http://localhost:3001/protected";

axios
  .get(url, {
    headers: {
      authorization: "Bearer <token>",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
