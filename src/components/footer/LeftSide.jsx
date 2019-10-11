import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap';
import appleStore from "../../static/icons/footer/btn_AppleStore.svg";
import googlePlay from "../../static/icons/footer/btn_GooglePlay.svg";
import windowsStore from "../../static/icons/footer/btn_WindowsStore.svg";
import logoApp from "../../static/icons/footer/Teky_LogoApp_Color.svg";

function LeftSide(props) {
    return (
        <div className="left-side-container">
            <Row>
                <Col className="logo-column" md={12}>
                    <img src={logoApp} />
                </Col>
            </Row>
            <Row>
                <Col className="instruction-column" md={6}>
                    <div>BAIXAR O APP</div>
                </Col>
                <Col className="icon-column" md={6}>
                    <img src={windowsStore} />
                </Col>
            </Row>
            <Row>
                <Col className="icon-column" md={6}>
                    <img src={googlePlay} />
                </Col>
                <Col className="icon-column" md={6}>
                    <img src={appleStore} />
                </Col>
            </Row>
        </div>
    )
}

LeftSide.propTypes = {

}

export default LeftSide

