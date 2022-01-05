import IsAuthenticated from "./components/IsAuthenticated";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { UserProvider } from "./context/user";

const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });

const client = new ApolloClient({
  link: httpLink as any,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <h1>Sign in or Login Page</h1>
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <IsAuthenticated>
              <Route exact path="/home">
                <Home />
              </Route>
            </IsAuthenticated>
          </Switch>
        </Router>
      </UserProvider>
    </ApolloProvider>
  );
}

export default App;
