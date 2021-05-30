import React from "react";
import { NavLink } from "react-router-dom";

import { BiSearchAlt } from "react-icons/bi";
import { CgPokemon } from "react-icons/cg";
import ashKetchum from "../../images/ashKetchum.png";

const Home = () => {
  return (
    <div className="homePageContainer">
      <div className="leftSide">
        <h2>Pokédex APP</h2>
        <h3>Gotta Catch'em All!</h3>
        <h4>Explore through pokemon cards and catch your favourite ones! </h4>
        <div className="buttons">
          <NavLink className="button" exact to="/explore">
            <button>
              <BiSearchAlt size={20} />
              explore
            </button>
          </NavLink>
          <NavLink className="button" exact to="/my-pokemon-deck">
            <button>
              <CgPokemon /> my pokemon deck
            </button>
          </NavLink>
        </div>
      </div>
      <div className="rightSide">
        <img src={ashKetchum} alt="ashKetchum" />
      </div>
    </div>
  );
};

export default Home;
