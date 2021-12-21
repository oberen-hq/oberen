import IsAuthenticated from "./components/IsAuthenticated";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from 'apollo-link-context';
import Home from "./pages/Home"
import Register from "./pages/Register";

const httpLink = new HttpLink({uri: "http://localhost:4000/graphql"});
const authLink = setContext(async(req, {headers}) => {
  const token = localStorage.getItem("accessToken");
  return {
    ...headers,
    headers: {
      Authorization: token ? token : null
    }
  }
});



const link = authLink.concat(httpLink as any);
const client = new ApolloClient({
  link: (link as any),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
