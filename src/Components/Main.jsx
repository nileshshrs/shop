import React from "react";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Footer from "./Footer";
import Footerbottom from "./FooterBottom";
import Products from "../Pages/Products";

const Main = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
      <Footerbottom />
    </>
  );
};

export default Main;
