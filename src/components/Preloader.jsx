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
        <span>Technical blogger</span>
        <span>Graphic</span>
        <span>Recorder</span>
        <span>Designer</span>
      </div>
    </div>
  );
};

export default Preloader;
