import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { UserProvider } from "./context/user";
import { setContext } from "apollo-link-context";

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

// Create link to API

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
});

// Used to set the authorization header of all our requests.
const authLink: any = setContext((_, { headers }) => {
  const token = localStorage.getItem("OBEREN-ACCESS-TOKEN");
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    },
  };
});

// Initiate our apollo client with our links and cache used to store reusable queries.

const client = new ApolloClient({
  link: authLink.concat(httpLink) as any,
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

// Render our components - Apollo Provider to pass our client down the component tree - User Provider to detect the user in every component.

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <UserProvider>
        <App />
      </UserProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
