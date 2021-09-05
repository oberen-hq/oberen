import React from "react";
import { findUsersInMass } from "../../graphql/queries/user/";
import { useQuery } from "@apollo/client";

export default function Home() {
  const { data, loading, error } = useQuery(findUsersInMass);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <pre>{error.message}</pre>;
  }

  return (
    <div>
      <ul>
        {data.findUsersInMass.map((user: any) => {
          <li key={user.id}>{user.username}</li>;
        })}
      </ul>
    </div>
  );
}
