import React from "react";

import { FaSearch } from "react-icons/fa";

const SearchBox = ({ handleSearchPokemon }) => {
  return (
    <div className="searcBoxContainer">
      <div className="searchBoxItem">
        <FaSearch />
        <input
          type="search"
          name="q"
          placeholder="Enter Pokemon Name..."
          autoComplete="off"
          onChange={handleSearchPokemon}
        />
      </div>
    </div>
  );
};

export default SearchBox;
