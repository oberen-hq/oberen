const axios = require("axios");

let url = "http://localhost:3001/api/auth/register";

axios
  .post(url, {
    firstName: "Alfie",
    lastName: "Phillips",
    email: "thealfiephillips@gmail.com",
    password: "PasswordH`45nu4j5hsdf9iejrfiefcniJKdxjdfhnHJFhfjHJfhfe9ofuck",
    confirmPassword:
      "PasswordH`45nu4j5hsdf9iejrfiefcniJKdxjdfhnHJFhfjHJfhfe9ofuck",
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
