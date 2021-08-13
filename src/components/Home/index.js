import React, { Component } from "react";
import Slide from "./Slide";
import Product from "../ProductList";
import VideoGift from "./VideoGift";

const Home = () => {
  return (
    <div>
      <Slide />
      <Product />
      <VideoGift />
    </div>
  );
};

export default Home;
