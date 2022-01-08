import { Redirect } from "react-router-dom";
import React from "react";

import jwt_decode from "jwt-decode";
import { useContext } from "react";
import UserContext from "../context/user";

interface Props {
  children?: React.ReactNode;
}

export default function IsAuthenticated({ children }: Props) {
  const { user, loading, error } = useContext(UserContext);

  if (loading) return <p>Loading...</p>;

  if (error) {
    console.error(error);
    return <Redirect to={{ pathname: "/" }} />;
  }

  if (user) {
    return <>{children}</>;
  } else {
    return <Redirect to={{ pathname: "/" }} />;
  }
}
