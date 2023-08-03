import { useState } from "react";
import { ImageUrlI } from "../utils/interfaces/cards";

function Cards({ URL }: ImageUrlI): JSX.Element {
  return (
    <li className="cards">
      <h3>Home staging</h3>
      <img src={`http://localhost:8000${URL}`} alt="home staging" loading="lazy" />
    </li>
  )
}

export default Cards;