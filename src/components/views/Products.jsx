import React from "react";
import Filters from "../Filters";
import { Row, Col } from "react-bootstrap";
import ProductsList from "../products/ProductsList";
import BreadcrumbSection from "../BreadcrumbSection";
import SponsoredProducts from "../SponsoredProducts";

function Products() {
  const products = [{}, {}, {}, {}, {}, {}];
  const sponsoredProducts = [
    {
      multi: true,
      products: [
        {
          content:
            "BANNER DINÂMICO COM TRANSIÇÕES ENTRE OS MAIS VENDIDOS CATEGORIZADOS",
        },
        {
          content:
            "BANNER DINÂMICO COM TRANSIÇÕES ENTRE OS MAIS VENDIDOS CATEGORIZADOS",
        },
        {
          content:
            "BANNER DINÂMICO COM TRANSIÇÕES ENTRE OS MAIS VENDIDOS CATEGORIZADOS",
        },
      ],
      index: "01",
    },
    {
      header: "DESTAQUE PATROCINADO",
      content: "Opção do lojista comprar destaque p/ seus produtos",
      index: "01",
    },
    {
      header: "DESTAQUE PATROCINADO",
      content: "Opção do lojista comprar destaque p/ seus produtos",
      index: "02",
    },
  ];

  return (
    <div className="products-container">
      <Row className="products-row">
        <Col md={3}>
          <Filters />
        </Col>
        <Col md={9}>
          <BreadcrumbSection />
          <ProductsList products={products} itemsPerRow={3} />
          <button className="primary-btn load-more-btn">CARREGAR MAIS</button>
        </Col>
      </Row>
      <Row className="sponsored-products-row">
        <SponsoredProducts items={sponsoredProducts} />
      </Row>
    </div>
  );
}

Products.propTypes = {};

export default Products;
