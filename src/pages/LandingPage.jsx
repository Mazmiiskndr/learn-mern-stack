import React, { Component } from "react";
import Header from "parts/Header";

import landingPage from "json/landingPage.json";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked ref={this.refMostPicked} data={landingPage.mostPicked} />
      </>
    );
  }
}
