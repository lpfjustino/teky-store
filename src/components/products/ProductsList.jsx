import React from 'react'
import { Row, Col } from 'react-bootstrap';
import ProductCard from "./ProductCard"

const getBootstrapConfig = (itemsPerRow = 4, mobileItemsPerRow = 2) => {
    return ({
        md: 12 / itemsPerRow,
        sm: 12 / mobileItemsPerRow,
    });
}

function ProductsList(props) {
    const { itemsPerRow, mobileItemsPerRow } = props;
    const bootstrapConfig = getBootstrapConfig(itemsPerRow, mobileItemsPerRow);
    const { md, sm } = bootstrapConfig;

    return (
        <Row className="products-list-container">
            {
                props.products.map(product =>
                    <Col md={md} xs={sm} className="product-card-container">
                        <ProductCard />
                    </Col>)
            }
        </Row>
    )
}

ProductsList.propTypes = {

}

export default ProductsList
