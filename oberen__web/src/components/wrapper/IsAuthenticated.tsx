import { Redirect } from "react-router-dom";
import React from "react";

import { useContext } from "react";
import UserContext from "../../context/user";

interface Props {
  children?: React.ReactNode;
}

/**
 * @title IsAuthenticated
 * @description This is the authentication route that verifies a user through their request headers.
 * @returns {JSX.Element}
 * */

export default function IsAuthenticated({ children }: Props) {
  const { user, loading, error } = useContext(UserContext);

  if (loading) return <p>Loading...</p>;

  if (error) {
    console.error(error);
    return <Redirect to={{ pathname: "/auth" }} />;
  }

  if (user) {
    return <>{children}</>;
  } else {
    return <Redirect to={{ pathname: "/auth" }} />;
  }
}
