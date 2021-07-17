const axios = require("axios");

let url = "http://localhost:3001/protected";

axios
  .get(url, {
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRoZWFsZmllcGhpbGxpcHNAZ21haWwuY29tIiwiaWQiOiI2MGYwMDljY2FmNDE1NTUzZTg4YTEzNTciLCJpYXQiOjE2MjY0MTg2NDMsImV4cCI6MTYyNjQ0NzQ0M30.oybumaeqIhbPEF1rqEWjuo7Zct0gLmYITfTZdYHmVrg",
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
