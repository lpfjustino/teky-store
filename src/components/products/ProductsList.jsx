import React from 'react';
import {Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

const getBootstrapConfig = (itemsPerRow = 4, mobileItemsPerRow = 2) => {
  return {
    md: 12 / itemsPerRow,
    sm: 12 / mobileItemsPerRow,
  };
};

function ProductsList(props) {
  const {itemsPerRow, mobileItemsPerRow, products = []} = props;
  const bootstrapConfig = getBootstrapConfig(itemsPerRow, mobileItemsPerRow);
  const {md, sm} = bootstrapConfig;

  return (
    <Row className="products-list-container">
      {products.map((product, i) => (
        <Col key={i} md={md} xs={sm} className="product-card-container">
          <ProductCard />
        </Col>
      ))}
    </Row>
  );
}

ProductsList.propTypes = {
  itemsPerRow: PropTypes.number,
  mobileItemsPerRow: PropTypes.number,
  products: PropTypes.array,
};

export default ProductsList;
