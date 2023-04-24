import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useTitleOnScroll() {
  const [titleClassName, setTitleClassName] = useState("");
  const location = useLocation();

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll()
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
  
    if (scrollTop >= 1000 && window.location.pathname === "/") {
      setTitleClassName("_title home-cards_title_underline")
    } else {
      setTitleClassName("_title")
    }
  };

  return titleClassName;
}

export default useTitleOnScroll;

