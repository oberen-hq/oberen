const axios = require("axios");

const url = "http://localhost:3001/api";
const postId = "60db66edf3185923e813d771";

axios
  .get(`${url}/posts/${postId}`)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
