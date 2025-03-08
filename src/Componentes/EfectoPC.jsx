import React, { useState, useEffect } from "react";
import SplashCursor from "./SplashCursor";

const EfectoPC = () => {
  const [esMovil, setEsMovil] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setEsMovil(window.innerWidth > 840);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return esMovil && <div><SplashCursor/></div>;
};

export default EfectoPC;