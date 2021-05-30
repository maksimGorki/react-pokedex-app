const initialState = {
  allPokemons: [],
  myPokemonDeck: [],
};

const actionTypesAsync = {
  fetchDataAsync: "FETCH_DATA_ASYNC",
  catchPokemonAsync: "CATCH_POKEMON_ASYNC",
  releasePokemonAsync: "RELEASE_POKEMON_ASYNC",
};

const rootReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case actionTypesAsync.fetchDataAsync:
      fetch(action.url)
        .then((response) => response.json())
        .then((data) =>
          data.results.forEach(async (pokemon) =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
              .then((res) => res.json())
              .then((data) => newState.allPokemons.push(data))
          )
        );
      break;

    case actionTypesAsync.catchPokemonAsync:
      const pokemonExists =
        newState.myPokemonDeck.filter((p) => action.pokemon.id === p.id)
          .length > 0;

      if (!pokemonExists) {
        newState.myPokemonDeck = [...newState.myPokemonDeck, action.pokemon];
        newState.myPokemonDeck.sort((a, b) => a.id - b.id);
      }

      break;

    case actionTypesAsync.releasePokemonAsync:
      newState.myPokemonDeck = newState.myPokemonDeck.filter(
        (p) => p.id !== action.pokemonId
      );
      break;

    default:
      break;
  }

  return newState;
};

export default rootReducer;
