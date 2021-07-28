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

import RightPane from "./components/RightPane";
import LeftPane from "./components/LeftPane";
import Feed from "./components/Feed";

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
      <Switch>
        <div className="main-page-container">
          <LeftPane />
          <Route exact path="/feed">
            <Feed />
          </Route>
          <RightPane />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
