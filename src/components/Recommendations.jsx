import React from "react";
import ProductsList from "./products/ProductsList";

function Recommendations(props) {
  const products = [{}, {}, {}, {}];

  return (
    <div className="recommendations-container">
      <div className="header">QUEM VIU, VIU TAMBÉM</div>
      <ProductsList products={products} />
      <div className="load-more-btn-container">
        <button className="primary-btn load-more-btn">CARREGAR MAIS</button>
      </div>
    </div>
  );
}

Recommendations.propTypes = {};

export default Recommendations;
