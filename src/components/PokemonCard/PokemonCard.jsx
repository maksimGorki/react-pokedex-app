import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { CgPokemon } from "react-icons/cg";
import { FaTimesCircle } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
import dummyPlaceholder from "../../images/preloader.gif";

import { actionTypes, renderFromTypes } from "../../constants/constants";

const PokemonCard = ({ pokemon, renderFrom }) => {
  const myPokemonDeck = useSelector((state) => state.myPokemonDeck);
  const dispatch = useDispatch();
  const style = `pokemonCardContainer ${pokemon.types[0].type.name}`;

  return (
    <div className={style}>
      <Link
        className="link"
        to={{
          pathname: `/pokemon-details/${pokemon.name}`,
          state: { pokemonData: pokemon },
        }}
      >
        <div className="cardNumber">#0{pokemon.id}</div>
        <img
          src={
            pokemon.sprites.other.dream_world.front_default
              ? pokemon.sprites.other.dream_world.front_default
              : dummyPlaceholder
          }
          alt={pokemon.name}
        />
        <div className="cardDetails">
          <h3>{pokemon.name}</h3>
          <small>Main Type: {pokemon.types[0].type.name}</small>
          <small>
            Sub Type:{" "}
            {pokemon.types[1]?.type?.name ? pokemon.types[1].type.name : "None"}
          </small>
        </div>
      </Link>
      {renderFrom === renderFromTypes.fromMyPokemonDeck ? (
        <button
          onClick={() =>
            dispatch({
              type: actionTypes.releasePokemon,
              pokemonId: pokemon.id,
            })
          }
        >
          <span>
            <FaTimesCircle size={50} />
          </span>
        </button>
      ) : (
        <button
          onClick={() =>
            dispatch({ type: actionTypes.catchPokemon, pokemon: pokemon })
          }
        >
          <span>
            {myPokemonDeck.filter((p) => p.id === pokemon.id).length > 0 ? (
              <FcCheckmark size={50} />
            ) : (
              <CgPokemon size={50} />
            )}
          </span>
        </button>
      )}
    </div>
  );
};

export default PokemonCard;
