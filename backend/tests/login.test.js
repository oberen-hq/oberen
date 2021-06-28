const axios = require("axios");

axios
  .post(url2, {
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
