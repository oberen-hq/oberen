import axios from "axios";

const url = "http://localhost:8000/graphql";
const method = "post";

axios({
  url: url,
  method: method,
  data: {
    query: `
        query {
            findAllUsers(args: {
                limit: 100
                skip: 2
            }) {
                id
                createdAt
                updatedAt
                type
                username
                displayName
                email
                userRole
                profileId
                }
        }
      `,
  },
})
  .then((res) => {
    console.log(res.status);
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
