import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../Home/Home";
import Explore from "../Explore/Explore";
import MyPokemonDeck from "../MyPokemonDeck/MyPokemonDeck";
import PokemonDetail from "../PokemonDetail/PokemonDetail";

const Switcher = () => {
  return (
    <Switch>
      <Route exact strict path="/" component={Home} />
      <Route exact strict path="/explore" component={Explore} />
      <Route exact strict path="/my-pokemon-deck" component={MyPokemonDeck} />
      <Route
        exact
        strict
        path="/pokemon-details/:pokemonName"
        component={PokemonDetail}
      />
    </Switch>
  );
};

export default Switcher;
