import React, { useState } from "react";
import { useSelector } from "react-redux";

import PokemonCard from "../PokemonCard/PokemonCard";
import SearchBox from "../SearchBox/SearchBox";

import { renderFromTypes } from "../../constants/constants";

const MyPokemonDeck = () => {
  const myPokemonDeck = useSelector((state) => state.myPokemonDeck);
  const [searchPokemon, setSearchPokemon] = useState("");

  const handleSearchPokemon = (e) => {
    setSearchPokemon(e.target.value);
  };

  return (
    <div className="exploreContainer">
      <h2>My Pokemon Deck</h2>
      <SearchBox handleSearchPokemon={handleSearchPokemon} />
      <div className="pokemonContainer">
        <div className="pokemonGridContainer">
          {myPokemonDeck.map(
            (pokemon) =>
              pokemon.name.includes(searchPokemon) && (
                <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  renderFrom={renderFromTypes.fromMyPokemonDeck}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPokemonDeck;
