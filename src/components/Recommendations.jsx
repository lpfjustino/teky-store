import React from 'react'
import ProductCard from "./products/ProductCard"
import { Row, Col } from "react-bootstrap"

function Recommendations(props) {
    return (
        <div className="recommendations-container">
            <div className="header">QUEM VIU, VIU TAMBÉM</div>
            <Row>
                <Col md={3} xs={6}><ProductCard /></Col>
                <Col md={3} xs={6}><ProductCard /></Col>
                <Col md={3} xs={6}><ProductCard /></Col>
                <Col md={3} xs={6}><ProductCard /></Col>
            </Row>
            <div className="load-more-btn-container">
                <button className="primary-btn load-more-btn">CARREGAR MAIS</button>
            </div>
        </div>
    )
}

Recommendations.propTypes = {

}

export default Recommendations

