import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { InspirationImageI } from "../utils/interfaces/interfaces";

function CarouselContainer({ data }: { data: InspirationImageI[] }) {
  const carouselSettings = {
    className: "carousel",
    autoPlay: true,
    infiniteLoop: true,
    interval: 5000,
    showArrows: true,
    width: "80%",
    showThumbs: true,
    showStatus: false
  }

  return (
    <Carousel {...carouselSettings}>
      {data.map((el: InspirationImageI) => (
        <div key={el.id}>
          <img src={`http://localhost:8000${el.URL}`} alt="image in the carousel" loading="lazy" />
          <p className="legend">{el.label}</p>
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselContainer;