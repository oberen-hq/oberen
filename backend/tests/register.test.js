const axios = require("axios");

let url = "http://localhost:3001/api/auth/register";
let url2 = "http://localhost:3001/";

axios
  .post(url, {
    name: "Alfie Phillips fuck shit cunt",
    email: "thealfiephillips@gmail.com",
    password: "password",
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// axios
//   .get(url2)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
