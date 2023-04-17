import { useState } from "react";
import Router from "./components/navigation/Router";
import HomeNavBar from "./components/globals/NavBar";
import NavBar from "./components/globals/NavBar";
import HeroHeader from "./components/HeroHeader";
import Presentation from "./components/Presentation";
import HomeCards from "./components/HomeCards";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <div className="app">
      <HomeNavBar />
      <Router />
    </div>
  );
}

export default App;
