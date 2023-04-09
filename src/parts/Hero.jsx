// Import required dependencies and assets
import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
// import Button from "elements/Button";

// Define the Hero component with props
export default function Hero(props) {
  // JSX to render the Hero component
  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        {/* // Use HeroText component */}
        <HeroText refMostPicked={props.refMostPicked} data={props.data} />

        {/* // Hero image */}
        <HeroImage/>

      </div>
    </section>
  );
}
