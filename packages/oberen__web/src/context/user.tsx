import React from "react";
import PropTypes from "prop-types";
import { useMeQuery } from "../generated/graphql";

// State the type of initial values we are expecting.

interface InitialValues {
  user: any;
  loading: boolean;
  error: any;
}

// Create our user context and set default values.

const UserContext = React.createContext({
  user: null,
  loading: false,
  error: null,
});

// Our UserProvider to pass down the user through the component tree.

export const UserProvider = (props: any) => {
  // Query our user using the 'me' query from ./generated/graphql.tsx

  const { loading, data, error }: any = useMeQuery();
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
