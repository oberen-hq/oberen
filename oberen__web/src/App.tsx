import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Switch>
        <div className="auth__container">
          <Route exact path="/auth">
            <Register />
          </Route>
          <Route exact path="/auth/login">
            <h1>Auth 2</h1>
            <Link to="/auth">Register</Link>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
