import React from 'react';
import { Row, Col, Breadcrumb } from 'react-bootstrap';

import boleto from '../../static/icons/footer/payment/pgt_Boleto.svg';
import Recommendations from '../Recommendations';
import Specifications from '../products/Specifications';

function ProductDetails(props) {
  return (
    <div className="product-details-container">
      <div className="breadcrumb-section-container">
        <Breadcrumb className="breadcrumb category-breadcrumb">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item>Categoria</Breadcrumb.Item>
          <Breadcrumb.Item>Sub-categoria</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Row className="product-details">
        <Col md={2} className="images-container">
          <div>IMAGEM QUEBRADA</div>
          <div>IMAGEM QUEBRADA</div>
          <div>IMAGEM QUEBRADA</div>
          <div>IMAGEM QUEBRADA</div>
          <div>IMAGEM QUEBRADA</div>
          <div>IMAGEM QUEBRADA</div>
          <div>IMAGEM QUEBRADA</div>
          <div>IMAGEM QUEBRADA</div>
        </Col>
        <Col md={4} className="selected-image-container">
          <div className="selected-image">
            <div className="card-badge">
              <div className="discount">-20%</div>
            </div>
          </div>
        </Col>
        <Col md={1}></Col>
        <Col md={5} xs={12} className="product-info-column">
          <div>
            <div className="title">
              Lorem ipsum dolor sit amet elit, consectetur adipiscing elit.
            </div>
            <div className="ref">Ref. 000000</div>
          </div>
          <div>
            <div className="buyout-section">
              <div className="price-section">
                <div className="old-price">R$ 00.000,00</div>
                <div className="current-price">R$ 0.000,00</div>
              </div>
              <div className="buyout-btn-container">
                <button className="primary-btn buyout-btn">Comprar</button>
              </div>
            </div>
            <div className="payment-conditions">
              ou 00x de R$ 0.000,00 iguais
            </div>
          </div>
          <div className="boleto-section">
            <div className="image-container">
              <img src={boleto} alt="boleto" />
            </div>
            <div>
              <div className="price">R$0.000,00</div>
              <div className="instructions">
                no boleto bancário (5% de desconto)
              </div>
            </div>
          </div>
          <div className="cep-container">
            <div>Calcule o frete e o prazo</div>
            <div className="input-container">
              <input name="CEP" id="CEP" placeholder="_____-___" />
              <button className="calc-btn">CALCULAR</button>
            </div>
          </div>
        </Col>
      </Row>
      <Specifications />
      <Recommendations />
    </div>
  );
}

ProductDetails.propTypes = {};

export default ProductDetails;
