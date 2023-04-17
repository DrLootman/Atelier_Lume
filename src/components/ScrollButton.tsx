import React, { useState, useEffect } from "react";
import arrow from "../assets/Arrow.png";

function ScrollButton(): JSX.Element {
  const [showButton, setShowButton] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 600, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-button ${showButton ? "" : "fade-out"}`}
      onClick={handleClick}
    >
      <img src={arrow} alt="arrow that invite user to scroll" />
    </button>
  );
};

export default ScrollButton;