import React from "react";
//import SalesCapVedio from "../assets/salescap.mp4";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src={SalesCapVedio}
      autoPlay
      loop
      muted
    />
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      <img src="/logo.svg" alt="Flystudio Logo" className="w-60" />
    </div>
  </div>
  );
};

export default HeroSection;
