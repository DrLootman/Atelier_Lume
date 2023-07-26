import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useTitleOnScroll(selector: string) {
  const [titleClassName, setTitleClassName] = useState("");

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

    const rect = (title as HTMLElement).offsetTop;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (
      scrollTop >= rect - window.innerHeight * 0.7 &&
      window.location.pathname === "/"
    ) {
      setTitleClassName(`_title ${selector}_underline`);
    } else {
      setTitleClassName("_title");
    }
  };

  return titleClassName;
}

export default useTitleOnScroll;
