import React from 'react'
import Filters from "../Filters";
import { Row, Col } from "react-bootstrap";
import ProductsList from "../products/ProductsList";

function Products(props) {
    const products = [ {}, {}, {}, {}, {}, {}, ];

    return (
        <Row>
            <Col md={3}><Filters /></Col>
            <Col md={9}>
                <ProductsList
                    products={products}
                    itemsPerRow={3}
                    />
            </Col>
        </Row>
    )
}

Products.propTypes = {

}

export default Products

