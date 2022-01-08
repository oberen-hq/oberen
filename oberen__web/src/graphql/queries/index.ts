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

const CHECK_EMAIL_EXISTS_QUERY = gql`
  query checkEmailExists($email: String!) {
    checkEmailExists(email: $email)
  }
`;

export { ME_QUERY, CHECK_EMAIL_EXISTS_QUERY };
