import React from 'react';
import { Carousel } from 'react-bootstrap';

function ProductsHighlight() {
    return (
        <div className="banner-slider">
            <Carousel slide={false} >
                <Carousel.Item>
                    BANNER DINÂMICO COM TRANSIÇÕES ENTRE OS MAIS VENDIDOS CATEGORIZADOS
                </Carousel.Item>
                <Carousel.Item>
                    BANNER DINÂMICO COM TRANSIÇÕES ENTRE OS MAIS VENDIDOS CATEGORIZADOS
                </Carousel.Item>
                <Carousel.Item>
                    BANNER DINÂMICO COM TRANSIÇÕES ENTRE OS MAIS VENDIDOS CATEGORIZADOS
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ProductsHighlight;

