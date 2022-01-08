import { gql } from "@apollo/client";

const ME_QUERY = gql`
  query {
    me {
      id
      email
      username
    }
  }
`;

export { ME_QUERY };
