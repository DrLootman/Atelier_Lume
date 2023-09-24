import { useEffect, useState } from "react";
import Router from "./components/navigation/Router";
import HomeNavBar from "./components/globals/NavBar";
import NavBar from "./components/globals/NavBar";
import HeroHeader from "./components/HeroHeader";
import Presentation from "./components/Presentation";
import HomeCards from "./components/HomeCards";
import HomePage from "./components/pages/HomePage";
import Footer from "./components/globals/Footer";
import { ToastContextProvider } from "./components/toast/ToastContext";
import { UserProvider } from "./components/contexts/UserContext";
import jwt_decode from "jwt-decode";
import { ConfirmContextProvider } from "./components/confirmModal/ConfirmContext";
import { restoreUser } from "./utils/restoreUser";

function App() {
  useEffect(() => {
    restoreUser();
  }, [])

  return (
    <div className="app">
      <ConfirmContextProvider>
        <ToastContextProvider>
          <UserProvider>
            <HomeNavBar />
            <Router />
            <Footer />
          </UserProvider>
        </ToastContextProvider>
      </ConfirmContextProvider>
    </div>
  );
}

export default App;
