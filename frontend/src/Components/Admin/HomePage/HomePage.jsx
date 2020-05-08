import React, { Component } from "react";
import MapDisplay from "../../Common/Gmaps/MapDisplay";
import Banner from "../../Common/Banner/Banner";
import "./HomePage.styles.css";
import Jumbotron from "../../Common/Jumbotron/Jumbotron";

import howData from "../../Common/BannerDataItems/How";
import whyData from "../../Common/BannerDataItems/Why";
class HomePage extends Component {
  state = {};
 
  componentDidMount =() => {
  
        localStorage.setItem('membershipfee',300)
    
}
  render() {
    return (
      <div className="homeLayout">
        <Jumbotron />

        <h2>How it works!</h2>
        <Banner bannerDetails={howData} />
        <h2>Choose a location near you!</h2>
        <MapDisplay />
        <h2>Why you ask? </h2>
        <Banner bannerDetails={whyData} />
      </div>
    );
  }
}

export default HomePage;
