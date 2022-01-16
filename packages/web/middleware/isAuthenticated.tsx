import { NextResponse } from "next/server";
import { useAuthContext } from "../context/user";

import React from "react";

/**
 * @title IsAuthenticated
 * @description This is the authentication route that verifies a user through their request headers.
 * @returns {JSX.Element}
 * */

export default function IsAuthenticated() {
  // Check if the page for loading status, error and the user.

  const { user, loading, error } = useAuthContext();

  if (loading) return <p>Loading...</p>;

  if (error) {
    return NextResponse.redirect("/auth");
  }

  if (user) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect("/auth");
  }
}
