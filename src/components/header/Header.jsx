import React from "react";
import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import Login from "./Login";
import Partnership from "./Partnership";
import Orders from "./Orders";
import Cart from "./Cart";
import logo from "../../static/icons/Teky_LogoIcon_Color.svg";

function Header() {
  return (
    <Row className="header-container">
      <Col className="left-side-container" md={6} xs={12}>
        <div className="logo-container">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <Search />
      </Col>
      <Col className="middle-container" md={3} xs={8}>
        <Login />
        <Partnership />
      </Col>
      <Col className="right-side-container" md={3} xs={4}>
        <Orders />
        <Cart />
      </Col>
    </Row>
  );
}

Header.propTypes = {};

export default Header;
