import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./pages/Home/Home";

const AppContainer = styled.div`
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  > div:first-of-type {
    flex: 1 0 70vh;
  }
`;

export default function App() {
  return (
    <Router>
      <Switch>
        <AppContainer>
          <Home />
        </AppContainer>
      </Switch>
    </Router>
  );
}
