import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";
import { ME_QUERY } from "../graphql/queries";

interface InitialValues {
  user: string;
  loading: boolean;
  error: any;
}

const UserContext = React.createContext({
  user: "",
  loading: false,
  error: null,
});

export const UserProvider = (props: any) => {
  const { loading, data, error } = useQuery(ME_QUERY);
  const user = data?.user || null;

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
