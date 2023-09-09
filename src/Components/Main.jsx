import React from "react";
import Navigation from "./Navigation";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Footer from "./Footer";
import Footerbottom from "./FooterBottom";
import Products from "../Pages/Products";
import SingleProduct from "../Pages/SingleProduct";
import { useAuthContext } from "../Context/useAuthContext";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Cart from "../Pages/Cart";
import Category from "./Category";
const Main = () => {
  const { user } = useAuthContext();
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:productID" element={<SingleProduct />} />
        <Route path=":ID" element={<Category />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
      </Routes>
      <Footer />
      <Footerbottom />
    </>
  );
};

export default Main;
