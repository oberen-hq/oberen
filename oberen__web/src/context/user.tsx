import React from "react";
import PropTypes from "prop-types";
import { gql, useQuery } from "@apollo/client";

const ME_QUERY = gql`
  query {
    me {
      user {
        id
        username
        email
      }
      errors {
        field
        message
      }
    }
  }
`;

interface InitialValues {
  user: any;
  loading: boolean;
  error: any;
}

const UserContext = React.createContext({
  user: null,
  loading: false,
  error: null,
});

export const UserProvider = (props: any) => {
  const { loading, data, error } = useQuery(ME_QUERY);
  const user = data?.me.user;

  const values: InitialValues = {
    user,
    loading,
    error,
  };

  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
};

export const UserConsumer = UserContext.Consumer;
export default UserContext;

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
