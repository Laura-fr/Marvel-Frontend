import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Characters from "./containers/Characters";
import Charactersresume from "./containers/Charactersresume";
import Comics from "./containers/Comics";
import Comicsresume from "./containers/Comicsresume";
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
          <Route path="/characters/:id">
            <Charactersresume />
          </Route>
          <Route path="/comics">
            <Comics />
          </Route>
          <Route path="/comics/:id">
            <Comicsresume />
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
