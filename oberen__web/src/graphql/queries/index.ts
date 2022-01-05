import { gql } from "@apollo/client";

const ME_QUERY = gql`
  query {
    me {
      id
      createdAt
      updatedAt
      displayName
      username
      email
      isLocal
      role
      count
      sessions {
        id
        createdAt
        updatedAt
        provider
        device
        ip
        lastLogged
        isCurrent
      }
      following {
        id
        name
        avatar
      }
      followers {
        id
        name
        avatar
      }
      errors {
        id
        type
        route
        description
      }
    }
  }
`;

const FIND_USERS_IN_MASS = gql`
  query {
    findUsersInMass {
      id
    }
  }
`;

export { ME_QUERY, FIND_USERS_IN_MASS };
