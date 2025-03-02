import React, { useState, useEffect } from "react";
import SplashCursor from "./SplashCursor";

const EfectoPC = () => {
  const [esMovil, setEsMovil] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setEsMovil(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Verificar el tamaño inicial

    return () => window.removeEventListener("resize", handleResize);
  }, [esMovil]);

  return !esMovil && <div><SplashCursor/></div>;
};

export default EfectoPC;