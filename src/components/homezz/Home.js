import React, { Component } from "react";
import Slide from "./Slide";
import Product from "./product/Product";
import VideoGift from "./videoGift";

class Home extends Component {
  render() {
    return (
      <div>
        <Slide />
        <Product />
        <VideoGift />
      </div>
    );
  }
}

export default Home;
