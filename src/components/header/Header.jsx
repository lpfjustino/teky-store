import React from 'react'
import logo from "../../static/icons/Teky_LogoIcon_Color.svg";
import Search from "./Search";
import Login from "./Login";
import Partnership from "./Partnership";
import Orders from "./Orders";
import Cart from "./Cart";
import { Row, Col } from "react-bootstrap";

function Header() {
    return (
        <Row className="header-container">
            <Col className="left-side-container" md={6} xs={12}>
                <img src={logo} />
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
    )
}

Header.propTypes = {

}

export default Header

