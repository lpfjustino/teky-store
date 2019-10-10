import React from 'react'
import gear from "../../static/icons/ic_teky_sniper_gray.svg";
import search from "../../static/icons/ic_search.svg";

function Search(props) {
    return (
        <div className="search-container">
            <div className="search-details">
                <img src={gear} />
            </div>
            <div><input className="search-input" /></div>
            <div className="search-button-container">
                <img src={search} />
            </div>
        </div>
    )
}

Search.propTypes = {

}

export default Search

