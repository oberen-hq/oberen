import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import signUp from "./pages/sign-up";
import signIn from "./pages/sign-in";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/sign-up" component={signUp} exact={true} />
        <Route path="/sign-in" component={signIn} exact={true} />
      </Switch>
    </Router>
  );
}

export default App;
