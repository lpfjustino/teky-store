import React from 'react'

function ProductCard(props) {
    return (
        <div className="card-container">
            <div className="image-container">
            </div>
            <div className="title"></div>
            <div className="old-price"></div>
            <div className="current-price"></div>
            <div className="payment-conditions"></div>

            <div className="card-badge">
                <div className="discount">-20%</div>
            </div>
        </div>
    )
}

ProductCard.propTypes = {

}

export default ProductCard

