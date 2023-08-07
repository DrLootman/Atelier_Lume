import { useState } from "react";
import Router from "./components/navigation/Router";
import HomeNavBar from "./components/globals/NavBar";
import NavBar from "./components/globals/NavBar";
import HeroHeader from "./components/HeroHeader";
import Presentation from "./components/Presentation";
import HomeCards from "./components/HomeCards";
import HomePage from "./components/pages/HomePage";
import Footer from "./components/globals/Footer";
import { ToastContextProvider } from "./components/toast/ToastContext";

function App() {

  return (
    <div className="app">
      <ToastContextProvider>
        <HomeNavBar />
        <Router />
        <Footer />
      </ToastContextProvider>
    </div>
  );
}

export default App;
