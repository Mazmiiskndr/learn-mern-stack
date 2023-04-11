import React from "react";
import Button from "elements/Button";
import IconCities from "assets/images/icons/ic_cities.svg";
import IconTraveler from "assets/images/icons/ic_traveler.svg";
import IconTreasure from "assets/images/icons/ic_treasure.svg";
import numberFormat from "utils/formatNumber";
import SmoothScroll from "smooth-scroll";


export default function HeroText(props) {
  // Function to smoothly scroll to the Most Picked section on button click
  function showMostPicked() {
    const scroll = new SmoothScroll();
    const target = props.refMostPicked.current;
    scroll.animateScroll(target, null, { speed: 1500, offset: 15 });
  }


  

  return (
    <div className="col-auto pr-5" style={{ width: 530 }}>
      <h1 className="h2 font-weight-bold line-height-1 mb-3">
        Forget Busy Work, <br />
        Start Next Vacation
      </h1>
      <p
        className="mb-5 font-weight-light text-gray-500 w-75"
        style={{ lineHeight: "170%" }}
      >
        We provide what you need to enjoy your holiday with family. Time to make
        another memorable moments.
      </p>
      <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
        Show Me Now
      </Button>
      {/* Icon and text for each stat */}
      <div className="row" style={{ marginTop: 80 }}>
        {/* Travelers stat */}
        <div className="col-auto" style={{ marginRight: 35 }}>
          <img
            width={36}
            height={36}
            src={IconTraveler}
            alt={`${props.data.travelers} Travelers`}
          />
          <h6 className="mt-3 ">
            {numberFormat(props.data.travelers)}{" "}
            <span className="text-gray-500 font-weight-light">Travelers</span>
          </h6>
        </div>
        {/* Treasures stat */}
        <div className="col-auto" style={{ marginRight: 35 }}>
          <img
            width={36}
            height={36}
            src={IconTreasure}
            alt={`${props.data.treasures} Treasure`}
          />
          <h6 className="mt-3 ">
            {numberFormat(props.data.treasures)}{" "}
            <span className="text-gray-500 font-weight-light">Treasure</span>
          </h6>
        </div>
        {/* Cities stat */}
        <div className="col-auto" style={{ marginRight: 35 }}>
          <img
            width={36}
            height={36}
            src={IconCities}
            alt={`${props.data.cities} Cities`}
          />
          <h6 className="mt-3 ">
            {numberFormat(props.data.cities)}{" "}
            <span className="text-gray-500 font-weight-light">Cities</span>
          </h6>
        </div>
      </div>
    </div>
  );
}
