import "../styles/globals.css";

import Router from "next/router";

import type { AppProps } from "next/app";

import { UserContext } from "../context/user";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

import { setContext } from "apollo-link-context";
import { useMeQuery } from "../generated/graphql";

// State the type of initial values we are expecting.

interface InitialValues {
  user: any;
  loading: boolean;
  error: any;
  logout: any;
}

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

// Our logout function

const logout = (): any => {
  localStorage.removeItem("OBEREN-ACCESS-TOKEN");
  client.resetStore();
  client.cache.gc();
  Router.push("/auth");
};

// Our UserProvider to pass down the user through the component tree.

const UserProvider = (props: { children: React.ReactNode }) => {
  // Query our user using the 'me' query from ./generated/graphql.tsx

  const { loading, data, error }: any = useMeQuery();
  const user = data?.me.user;

  const values: InitialValues = {
    user,
    loading,
    error,
    logout,
  };

  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ApolloProvider>
  );
}

export default MyApp;
