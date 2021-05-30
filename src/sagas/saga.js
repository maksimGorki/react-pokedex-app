import { takeLatest, put, all } from "redux-saga/effects";

const actionTypes = {
  fetchData: "FETCH_DATA",
  catchPokemon: "CATCH_POKEMON",
  releasePokemon: "RELEASE_POKEMON",
};

const actionTypesAsync = {
  fetchDataAsync: "FETCH_DATA_ASYNC",
  catchPokemonAsync: "CATCH_POKEMON_ASYNC",
  releasePokemonAsync: "RELEASE_POKEMON_ASYNC",
};

function* fetchDataAsync(action) {
  yield put({ type: actionTypesAsync.fetchDataAsync, url: action.url });
}

function* catchPokemonAsync(action) {
  yield put({
    type: actionTypesAsync.catchPokemonAsync,
    pokemon: action.pokemon,
  });
}

function* releasePokemonAsync(action) {
  yield put({
    type: actionTypesAsync.releasePokemonAsync,
    pokemonId: action.pokemonId,
  });
}

export function* rootSaga() {
  yield all([
    takeLatest(actionTypes.fetchData, fetchDataAsync),
    takeLatest(actionTypes.catchPokemon, catchPokemonAsync),
    takeLatest(actionTypes.releasePokemon, releasePokemonAsync),
  ]);
}

export default rootSaga;
