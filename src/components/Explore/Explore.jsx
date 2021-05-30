import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import PokemonCard from "../PokemonCard/PokemonCard";
import SearchBox from "../SearchBox/SearchBox";

import { renderFromTypes } from "../../constants/constants";

const Explore = () => {
  const allPokemons = useSelector((state) => state.allPokemons);

  const [pokemonList, setPokemonList] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [searchPokemon, setSearchPokemon] = useState("");

  const getPokemons = async () => {
    fetch(loadMore)
      .then((res) => res.json())
      .then((data) => {
        setLoadMore(data.next);
        data.results.forEach(async (pokemon) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            .then((res) => res.json())
            .then((data) =>
              setPokemonList((currentList) => [...currentList, data])
            )
        );
      });
  };

  const handleSearchPokemon = (e) => {
    setSearchPokemon(e.target.value);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="exploreContainer">
      <h2>Explore</h2>
      <SearchBox handleSearchPokemon={handleSearchPokemon} />
      <div className="pokemonContainer">
        <div className="pokemonGridContainer">
          {searchPokemon === ""
            ? pokemonList.map((pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  renderFrom={renderFromTypes.fromExplore}
                />
              ))
            : allPokemons.map(
                (pokemon) =>
                  pokemon.name.includes(searchPokemon) && (
                    <PokemonCard
                      key={pokemon.id}
                      pokemon={pokemon}
                      renderFrom={renderFromTypes.fromExplore}
                    />
                  )
              )}
        </div>
        <button className="loadMore" onClick={() => getPokemons()}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Explore;
