import IsAuthenticated from "./components/wrapper/IsAuthenticated";
import UserContext from "./context/user";
import UserForm from "./components/auth/UserForm";
import Logout from "./components/auth/Logout";
import Home from "./pages/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";

// Define our app instance.

function App() {
  // Grab the user using our default user context.

  const { user } = useContext(UserContext);

  return (
    // These are the routes specified either being an 'authenticated' route or base route.
    <Router>
      <Switch>
        <Route exact path="/auth">
          {user ? <Redirect to={{ pathname: "/home" }} /> : <UserForm />}
        </Route>
        <IsAuthenticated>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/auth/logout">
            <Logout />
          </Route>
        </IsAuthenticated>
      </Switch>
    </Router>
  );
}

export default App;
