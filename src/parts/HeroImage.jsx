import React from "react";
import ImageHero from "assets/images/img-hero.jpg";
import ImageHeroFrame from "assets/images/img-hero-frame.jpg";

// The HeroImage component displays the hero image and its frame.
export default function HeroImage() {
  return (
    
    // The container for the hero image and its frame
    <div className="col-6 pl-5 ">
      <div style={{ width: 520, height: 410 }}>

        {/* The frame for the hero image */}
        <img
          src={ImageHeroFrame}
          alt="Room with couches"
          className="img-fluid position-absolute"
          style={{ margin: "0 -15px -15px 0", zIndex: 1 }}
        />
        {/* The hero image itself */}

        <img
          src={ImageHero}
          alt="Room with couches"
          className="img-fluid position-absolute"
          style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
        />
      </div>

    </div>
  );
}
