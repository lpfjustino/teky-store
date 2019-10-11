import React from 'react'
import { Row, Col } from 'react-bootstrap';
import ProductCard from "./ProductCard"

function ProductsList(props) {
    return (
        <Row className="products-list-container">
            {
                props.products.map(product =>
                    <Col md={3} xs={6} className="product-card-container">
                        <ProductCard />
                    </Col>)
            }
        </Row>
    )
}

ProductsList.propTypes = {

}

export default ProductsList

