import React from 'react'
import logo from "../../static/icons/Teky_LogoIcon_Color.svg";
import Search from "./Search";
import Login from "./Login";
import Partnership from "./Partnership";

function Header() {
    return (
        <div className="header-container">
            <img src={logo} />
            <Search />
            <Login />
            <Partnership />
        </div>
    )
}

Header.propTypes = {

}

export default Header

