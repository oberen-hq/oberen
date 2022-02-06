import { UserContext } from "../context/user";
import { ApolloProvider } from "@apollo/client";

import { useMeQuery } from "../generated/graphql";
import { useApollo } from "../utils/apolloClient";

// State the type of initial values we are expecting.

interface InitialValues {
  user: any;
  loading: boolean;
  error: any;
}

// Our UserProvider to pass down the user through the component tree.

const UserProvider = (props: { children: React.ReactNode }) => {
  // Query our user using the 'me' query from ./generated/graphql.tsx

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

function MyApp({ Component, pageProps }: any) {
  const client = useApollo(pageProps);

  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ApolloProvider>
  );
}

export default MyApp;
