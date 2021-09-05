import React from "react";
import { useQuery, gql } from "@apollo/client";

export const findUsersInMass = gql`
  query {
    findUsersInMass(args: { limit: 30, skip: 0 }) {
      id
      createdAt
      updatedAt
      username
      displayName
      email
      count
    }
  }
`;
