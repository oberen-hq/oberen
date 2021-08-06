import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";

import Home from "./pages/Home/home";
import SignUpPage from "./pages/SignUp/sign-up";
import SignInPage from "./pages/SignIn/sign-in";

import { useContext } from "react";
import { AuthContext } from "./context/Auth/AuthContext";

import signOut from "./utils/signOut";

function App() {
  const { user, dispatch } = useContext(AuthContext);
  const history = useHistory();
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Switch>
        <Route exact path="/sign-up">
          {user ? <Redirect to="/" /> : <SignUpPage />}
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/sign-in">
          {user ? <Redirect to="/" /> : <SignInPage />}
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/signout">
          {user ? (
            <Redirect to="/" />
          ) : (
            localStorage.removeItem("SIMPLIFY_USER")
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
