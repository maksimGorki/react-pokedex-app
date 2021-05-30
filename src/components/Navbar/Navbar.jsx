import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { BiSearchAlt } from "react-icons/bi";
import { CgPokemon } from "react-icons/cg";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const handleCurrentWidth = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  useEffect(() => {
    window.addEventListener("resize", handleCurrentWidth, { passive: true });

    return () => {
      window.removeEventListener("resize", handleCurrentWidth);
    };
  }, []);

  return (
    <header>
      <div className="navbar">
        <div className="navbarTitleContainer">
          <NavLink className="navbarTitle" exact to="/">
            <h2>Pokédex</h2>
          </NavLink>
        </div>
        {windowWidth > 640 ? (
          <div className="navbarWebItemContainer">
            <NavLink className="navbarItem" exact to="/explore">
              <h4>Explore</h4>
            </NavLink>
            <NavLink className="navbarItem" exact to="/my-pokemon-deck">
              <h4>My Pokemon Deck</h4>
            </NavLink>
          </div>
        ) : (
          <div className="navbarWebItemContainer">
            <NavLink className="navbarItem" exact to="/explore">
              <BiSearchAlt size={50} />
            </NavLink>
            <NavLink className="navbarItem" exact to="/my-pokemon-deck">
              <CgPokemon size={50} />
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
