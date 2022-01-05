import { Redirect } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ME_QUERY } from "../graphql/queries";
import React from "react";

import jwt_decode from "jwt-decode";
import { useContext } from "react";
import UserContext from "../context/user";

interface Props {
  children?: React.ReactNode;
}

export default function IsAuthenticated({ children }: Props) {
  const { user, loading, error } = useContext(UserContext);

  console.log(user);
  console.log(loading);
  console.log(error);

  if (loading) return <p>Loading...</p>;

  if (error) {
    let refreshToken = localStorage.getItem("refreshToken") as string;
    try {
      if (refreshToken) {
        jwt_decode(refreshToken, {
          header: true,
        });
      } else {
        return <>{children}</>;
      }
    } catch (err: any) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      return <Redirect to={{ pathname: "/" }} />;
    }

    // TODO: Generate new accessToken

    return <p>{children}</p>;
  }

  if (!user) {
    return <Redirect to={{ pathname: "/" }} />;
  } else {
    return <>{children}</>;
  }
}
