const axios = require("axios");

let url = "http://localhost:3000/api/auth/login";

axios
  .post(url, {
    username: "Thisismyusername",
    email: "thealfiephillips@gmail.com",
    password: "thisismypassword",
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
