const axios = require("axios");

let url = "http://localhost:3001/api/auth/register";

axios
  .post(url, {
    firstName: "Alfie",
    lastName: "Phillips",
    email: "thealfiephillips@gmail.com",
    password: "password",
    confirmPassword: "password",
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
