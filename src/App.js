import React from "react";
import Pokedex from "components/Pokedex";
import Pokemon from "components/Pokemon";
import { Route, Switch } from "react-router-dom";

const App = () => (
  <Switch>
    <Route exact path="/:page?" render={(props) => <Pokedex {...props} />} />
    <Route
      exact
      path="/pokemon/:pokemonId"
      render={(props) => <Pokemon {...props} />}
    />
  </Switch>
);

export default App;
