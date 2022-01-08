import IsAuthenticated from "./components/wrapper/IsAuthenticated";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { useContext } from "react";
import UserContext from "./context/user";
import UserForm from "./components/auth/UserForm";

function App() {
  const { user } = useContext(UserContext);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Redirect to={{ pathname: "/home" }} /> : <UserForm />}
        </Route>
        <Route exact path="/register">
          {user ? <Redirect to={{ pathname: "/home" }} /> : <Register />}
        </Route>
        <Route exact path="/login">
          {user ? <Redirect to={{ pathname: "/home" }} /> : <h1>Login Page</h1>}
        </Route>
        <IsAuthenticated>
          <Route exact path="/home">
            <Home />
          </Route>
        </IsAuthenticated>
      </Switch>
    </Router>
  );
}

export default App;
