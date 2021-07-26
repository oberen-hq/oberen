import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./pages/Home/home";
import SignUpPage from "./pages/SignUp/sign-up";
import SignInPage from "./pages/SignIn/sign-in";

import { useContext } from "react";
import { AuthContext } from "./context/Auth/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
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
    </Router>
  );
}

export default App;
