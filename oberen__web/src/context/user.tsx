import React from "react";
import PropTypes from "prop-types";
import { useMeQuery } from "../generated/graphql";

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
