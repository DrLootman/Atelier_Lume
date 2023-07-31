import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselImage from "./CarouselImage";
import { InspirationImageI } from "../utils/interfaces/interfaces";

function ImageCarousel({ data }: { data: InspirationImageI[] }) {
  return (
    <Carousel
      className="carousel"
      showArrows={true}
      emulateTouch={true}
      width="90%"
      showStatus={false}
    >
      {data?.map((el: InspirationImageI) => {
        return (
          <CarouselImage 
            id={el.id} 
            URL={el.URL} 
            label={el.label} 
          />
        );
      })}
    </Carousel>
  );
}

export default ImageCarousel;
