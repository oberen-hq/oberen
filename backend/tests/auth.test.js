const axios = require("axios");

let url = "http://localhost:3001/protected";

axios
  .get(url, {
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZmVhZTQyM2E0NWE0NDgxODQ3NmZmNiIsIm5hbWUiOiJBbGZpZSBQaGlsbGlwcyIsImVtYWlsIjoidGhlYWxmaWVwaGlsbGlwc0BnbWFpbC5jb20iLCJpYXQiOjE2MjczMDM0OTAsImV4cCI6MTYyNzMzMjI5MH0.rQEDG4-E706YUzJ3P7PTZuFeb3n0i7ds5TL9TLDxeeY",
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
