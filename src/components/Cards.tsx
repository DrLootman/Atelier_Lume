import { useState } from "react";

function Cards({ firstImg }: string): JSX.Element {
  return (
    <li className="cards">
      <h3>Home staging</h3>
      <img src={firstImg} alt="home staging" />
    </li>
  )
}

export default Cards;