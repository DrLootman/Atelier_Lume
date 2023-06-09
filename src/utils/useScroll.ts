import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useScroll() {
  const [className, setClassName] = useState("");
  const [titleClassName, setTitleClassName] = useState("");

  const location = useLocation()

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll()
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
  
    if (scrollTop > 300 && window.location.pathname === "/") {
      setClassName("home-navbar home-navbar--scrolled home-navbar--fixed");
    } else if (scrollTop > 700 && window.location.pathname === "/") {
      setTitleClassName("home-cards_title_after")
    } else if (window.location.pathname !== "/") {
      setClassName("home-navbar home-navbar--scrolled");
    } else if (window.location.pathname === "/") {
      setClassName("home-navbar home-navbar--fixed")
      setTitleClassName("home-cards_title")
    }
  };

  return className;
}

export default useScroll;

