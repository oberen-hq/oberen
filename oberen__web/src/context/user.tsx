import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";
import { ME_QUERY } from "../graphql/queries";

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
  const user = data?.me;

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
