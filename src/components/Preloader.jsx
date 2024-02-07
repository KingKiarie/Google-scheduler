import React, { useEffect } from "react";

import "./preloader.css";
import { preloaderAnimation } from "../animations";
const Preloader = () => {
  useEffect(() => {
    preloaderAnimation();
  }, []);
  return (
    <div className="preloader">
      <div className="text-container">
        <span>Developer</span>
        <span>UX</span>
        <span>Designer</span>
      </div>
    </div>
  );
};

export default Preloader;
