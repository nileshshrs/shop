import React from "react";
import Carousel1 from "../Components/Carousel1";
import Topselling from "../Components/Topselling";
import Carousel2 from "../Components/Carousel2";
import BrandStore from "../Components/BrandStore";
import Advertisement from "../Components/Advertisement";



const Home = () => {
  return (
    <>  
      <Carousel1/>
      <Topselling/>
      <Carousel2/>
      <Advertisement/>
      <BrandStore/>
    </>
  );
};

export default Home;
