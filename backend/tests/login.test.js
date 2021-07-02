const axios = require("axios");

let url = "http://localhost:3001/api/auth/login";

axios
  .post(url, {
    email: "thealfiephillips@gmail.com",
    password: "thisismypassword",
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
