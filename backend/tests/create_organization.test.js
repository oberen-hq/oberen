const axios = require("axios");

const url = "http://localhost:3001/api/organization/create";

const headers = {
  authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZmVhZTQyM2E0NWE0NDgxODQ3NmZmNiIsIm5hbWUiOiJBbGZpZSBQaGlsbGlwcyIsImVtYWlsIjoidGhlYWxmaWVwaGlsbGlwc0BnbWFpbC5jb20iLCJpYXQiOjE2MjczMDM0OTAsImV4cCI6MTYyNzMzMjI5MH0.rQEDG4-E706YUzJ3P7PTZuFeb3n0i7ds5TL9TLDxeeY",
  Accept: "application/json",
  "Content-Type": "application/json",
};

const data = {
  employers: ["example", "another example"],
  name: "OrganizationNam",
  email: "thealfiephillips@gmail.com",
  number: "07737817933",
  region: "GB",
  postcode: "TR26 2JE",
  description:
    "iofgeuifghjeiofgjeoifgjeriofghjeiogjeiogfjeiogjeiofgjeiogjeiogjeiogfjeiogjeoigje",
};

axios
  .post(url, data, {
    headers: headers,
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
