import React from "react";
import { useLocation } from "react-router";

import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonDetail = () => {
  const location = useLocation();
  return (
    <div className="pokemonDetailContainer">
      <div className="pokemonCard">
        <PokemonCard pokemon={location?.state?.pokemonData} />
      </div>
      <div className="pokemonDetail">
        <div className="attributesContainer">
          <h2>Attributes</h2>
          <div className="attributes">
            <div className="attributeName">base-experience</div>
            <div className="attributeValue">
              {location?.state?.pokemonData?.base_experience}
            </div>
          </div>
          <div className="attributes">
            <div className="attributeName">height</div>
            <div className="attributeValue">
              {location?.state?.pokemonData?.height}
            </div>
          </div>
          <div className="attributes">
            <div className="attributeName">weight</div>
            <div className="attributeValue">
              {location?.state?.pokemonData?.weight}
            </div>
          </div>
        </div>
        <div className="attributesContainer">
          <h2>Abilities</h2>
          {location?.state?.pokemonData?.abilities?.map((ability) => (
            <div key={ability.slot} className="attributes">
              <div className="attributeName">{ability.ability.name}</div>
            </div>
          ))}
        </div>
        <div className="attributesContainer">
          <h2>Stats</h2>
          {location?.state?.pokemonData?.stats?.map((stat) => (
            <div key={stat.stat.name} className="attributes">
              <div className="attributeName">{stat.stat.name}</div>
              <div className="attributeValue">{stat.base_stat}</div>
            </div>
          ))}
        </div>
        <div className="attributesContainer">
          <h2>Moves</h2>
          {location?.state?.pokemonData?.moves?.map((move) => (
            <div key={move.move.name} className="attributes">
              <div className="attributeName">{move.move.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
