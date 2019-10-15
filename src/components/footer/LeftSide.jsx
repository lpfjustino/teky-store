import React from "react";
import { Row, Col } from "react-bootstrap";
import appleStore from "../../static/icons/footer/btn_AppleStore.svg";
import googlePlay from "../../static/icons/footer/btn_GooglePlay.svg";
import windowsStore from "../../static/icons/footer/btn_WindowsStore.svg";
import logoApp from "../../static/icons/footer/Teky_LogoApp_Color.svg";

function LeftSide(props) {
  return (
    <div className="left-side-container">
      <Row>
        <Col className="logo-column" md={6}>
          <img src={logoApp} xs={6} alt="logoApp icon" />
        </Col>
      </Row>
      <Row>
        <Col className="instruction-column" md={6} xs={6}>
          <div>BAIXAR O APP</div>
        </Col>
        <Col className="icon-column" md={6} xs={6}>
          <img src={windowsStore} alt="windowsStore icon" />
        </Col>
      </Row>
      <Row>
        <Col className="icon-column" md={6} xs={6}>
          <img src={googlePlay} alt="googlePlay icon" />
        </Col>
        <Col className="icon-column" md={6} xs={6}>
          <img src={appleStore} alt="appleStore icon" />
        </Col>
      </Row>
    </div>
  );
}

LeftSide.propTypes = {};

export default LeftSide;
