import { Redirect, useHistory } from "react-router-dom";
import { ApolloConsumer } from "@apollo/client";
import { useContext, useState } from "react";

import UserContext from "../../context/user";

// Define our logout instance.

export default function Logout() {
  // Get the current user.
  const { user } = useContext(UserContext);

  // Hooks

  const [loggedOut, setLoggedOut] = useState(false);
  const history = useHistory();

  // Check if the user exists.

  if (!user) {
    return <Redirect to={{ pathname: "/auth" }} />;
  }

  // Logout function to remove the local access token.

  const logout = () => {
    localStorage.removeItem("OBEREN-ACCESS-TOKEN");
    setLoggedOut(true);
  };

  // If the user has been logged out, clear the apollo-client store.

  return (
    <div>
      {loggedOut ? (
        <ClearStore />
      ) : (
        <div>
          <h1>Are you sure you want to logout?</h1>
          <br />
          <button onClick={() => logout()}>Log out</button>
          <button onClick={() => history.goBack()}>Return back</button>
        </div>
      )}
    </div>
  );
}

// A function to clear the client cache and redirect the user.

function ClearStore() {
  return (
    <ApolloConsumer>
      {(client) => {
        client.resetStore();
        client.cache.gc();
        return <Redirect to={{ pathname: "/auth" }} />;
      }}
    </ApolloConsumer>
  );
}
