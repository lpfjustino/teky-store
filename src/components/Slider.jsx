import React from 'react';
import { Carousel } from 'react-bootstrap';

function BannerSlider() {
    return (
        <div className="slider-container">
            <Carousel slide={false} >
                <Carousel.Item>
                    SUPER BANNER MARKETING
                </Carousel.Item>
                <Carousel.Item>
                    SUPER BANNER MARKETING
                </Carousel.Item>
                <Carousel.Item>
                    SUPER BANNER MARKETING
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default BannerSlider

