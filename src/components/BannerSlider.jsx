import React from "react";
import { Carousel } from "react-bootstrap";

function BannerSlider() {
  return (
    <div className="slider-container banner-slider">
      <Carousel slide={false}>
        <Carousel.Item>SUPER BANNER MARKETING</Carousel.Item>
        <Carousel.Item>SUPER BANNER MARKETING 2</Carousel.Item>
        <Carousel.Item>SUPER BANNER MARKETING 3</Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BannerSlider;
