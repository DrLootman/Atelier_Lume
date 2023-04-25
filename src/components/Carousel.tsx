import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImageCarousel({ images }) {
  return (
    <Carousel
      className="carousel"
      showArrows={true}
      emulateTouch={true}
      width="90%"
      showStatus={false}
    >
      {images.map((el) => {
        return (
          <div key={el.id} className="_slot">
            <img src={el.URL} alt="image in the carousel" />
            <p className="legend">{el.legend}</p>
          </div>
        );
      })}
    </Carousel>
  );
}

export default ImageCarousel;
