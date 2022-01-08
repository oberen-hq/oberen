import { gql } from "@apollo/client";

const REGISTER_MUTATION = gql`
  mutation createUser($input: UserInput!) {
    createUser(input: $input)
  }
`;

export { REGISTER_MUTATION };
