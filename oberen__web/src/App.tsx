import IsAuthenticated from "./components/wrapper/IsAuthenticated";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import { useContext } from "react";
import UserContext from "./context/user";
import UserForm from "./components/auth/UserForm";
import Logout from "./components/auth/Logout";

function App() {
  const { user } = useContext(UserContext);

  return (
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
