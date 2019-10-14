import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard(props) {
    return (
        <div className="card-container">
            <div className="card-badge">
                <div className="discount">-20%</div>
            </div>
            <div className="card-content">
                <div className="image-container">
                    <Link to="/products/1" className="primary-btn see-product-btn">
                        VER PRODUTO
                    </Link>
                </div>
                <div className="title">Lorem ipsum dolor sit amet elit, consectetur adipiscing elit. </div>
                <div className="old-price">R$ 00.000,00</div>
                <div className="current-price">R$ 0.000,00</div>
                <div className="payment-conditions">ou 00x de R$ 0.000,00 iguais</div>
            </div>

        </div>
    )
}

ProductCard.propTypes = {

}

export default ProductCard

