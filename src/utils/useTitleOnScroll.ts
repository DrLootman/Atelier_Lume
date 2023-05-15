import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useTitleOnScroll(selector) {
  const [titleClassName, setTitleClassName] = useState("");
  console.log(titleClassName);

  const location = useLocation();

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  const handleScroll = () => {
    const title = document.querySelector(`.${selector}`);

    const rect = title.offsetTop;
    console.log(window.innerHeight)
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrollTop)
    console.log("rect", rect)

    if (scrollTop >= rect - (window.innerHeight * 0.7)  && window.location.pathname === "/") {
      setTitleClassName(`_title ${selector}_underline`);
    } else {
      setTitleClassName("_title");
    }
  };

  return titleClassName;
}

export default useTitleOnScroll;
