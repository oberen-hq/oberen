import { Redirect, useHistory } from "react-router-dom";
import { ApolloConsumer } from "@apollo/client";
import { useContext, useState } from "react";
import UserContext from "../../context/user";
export default function Logout() {
  const { user } = useContext(UserContext);
  const [loggedOut, setLoggedOut] = useState(false);
  const history = useHistory();

  if (!user) {
    return <Redirect to={{ pathname: "/auth" }} />;
  }

  const logout = () => {
    localStorage.removeItem("OBEREN-ACCESS-TOKEN");
    setLoggedOut(true);
  };

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
