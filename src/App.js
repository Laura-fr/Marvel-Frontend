import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import Favs from "./containers/Favs";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/comics">
            <Comics />
          </Route>
          <Route path="/favs">
            <Favs />
          </Route>
          <Route path="/">
            <Characters />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
