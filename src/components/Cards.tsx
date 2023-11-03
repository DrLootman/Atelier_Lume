import { useState } from "react";
import { ImageUrlI } from "../utils/interfaces/interfaces.d";

export default function Cards({ photo_url, label }: ImageUrlI): JSX.Element {
  return (
    <li className="cards">
      <h3>{label}</h3>
      <img 
        src={`http://localhost:8000${photo_url}`} 
        alt="home staging" 
        loading="lazy" 
      />
    </li>
  )
}