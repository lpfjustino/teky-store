import React from "react";
import gear from "../../static/icons/ic_teky_sniper_gray.svg";
import search from "../../static/icons/ic_search.svg";

function Search(props) {
  return (
    <div className="search-container">
      <div className="search-details">
        <img src={gear} alt="gear icon" />
      </div>
      <div className="input-container">
        <input className="search-input" placeholder="Encontre seus produtos" />
      </div>
      <div className="search-button-container">
        <img src={search} alt="search icon" />
      </div>
    </div>
  );
}

Search.propTypes = {};

export default Search;
