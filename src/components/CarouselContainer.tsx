import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { InspirationImageI } from "../utils/interfaces/interfaces";

function CarouselContainer({ data }: { data: InspirationImageI[] }) {
  const carouselSettings = {
    className: "carousel",
    showThumbs: true,
    showArrows: true,
    interval: 5000,
    autoPlay: true,
    infiniteLoop: true,
    width: "80%",
    showStatus: false
  }

  return (
    <Carousel {...carouselSettings}>
     <div>
       <img src={`http://localhost:8000${data[0]?.URL}`} alt="image in the carousel" loading="lazy" />
       <p className="legend">{data[0]?.label}</p>
     </div>
     <div>
       <img src={`http://localhost:8000${data[1]?.URL}`} alt="image in the carousel" loading="lazy" />
       <p className="legend">{data[1]?.label}</p>
     </div>
     <div>
       <img src={`http://localhost:8000${data[2]?.URL}`} alt="image in the carousel" loading="lazy" />
       <p className="legend">{data[2]?.label}</p>
     </div>
     <div>
       <img src={`http://localhost:8000${data[3]?.URL}`} alt="image in the carousel" loading="lazy" />
       <p className="legend">{data[3]?.label}</p>
     </div>
    </Carousel>
  );
}

export default CarouselContainer;

// {data?.map((el: InspirationImageI) => {
//   return (
//     <div key={el.id}>
//       <img src={`http://localhost:8000${el.URL}`} alt="image in the carousel" loading="lazy" />
//       <p className="legend">{el.label}</p>
//     </div>
//   );
// })}