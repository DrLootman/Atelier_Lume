import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import CarouselImage from "./CarouselImage";
import { InspirationImageI } from "../utils/interfaces/interfaces";

function CarouselContainer({ data }: { data: InspirationImageI[] }) {

  const carouselSettings = {
    className: "carousel",
    showArrows: true,
    infiniteLoop: true,
    interval: 5000,
    autoPlay: true,
    width: "80%",
    showStatus: false
  }

  return (
    <Carousel { ...carouselSettings }>
      {data?.map((el: InspirationImageI) => {
        return (
          <div key={el.id} className="_slot">
            <img src={`http://localhost:8000${el.URL}`} alt="image in the carousel" />
            <p className="legend">{el.label}</p>
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselContainer;
