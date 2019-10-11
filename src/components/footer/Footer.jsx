import React from 'react'
import { Row, Col } from 'react-bootstrap';
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function Footer(props) {
    return (
        <Row className="footer-container">
            <Col className="left-side" md={4}>
                <LeftSide />
            </Col>
            <Col className="right-side" md={8}>
                <RightSide />
            </Col>
        </Row>
    )
}

Footer.propTypes = {

}

export default Footer

