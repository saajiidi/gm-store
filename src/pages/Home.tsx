// src/pages/Home.tsx

import React from "react";
import Slider from "../components/Slider/Slider";
import logo from "../assets/img/gear-master-logo.png"
import ProductCard from "../components/Products/ProductCard";
import ProductListing from "../components/Products/ProductListing";


const Home: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      {/* Slider */}
      <div className="container mx-auto mt-4">
        <Slider />
      </div>

      <div className="container text-center mt-4">
        <img src={logo} alt="Gear Master Logo" width="150" height="150" />
        <h1 className="text-black text-4xl font-bold">Gear Master</h1>
      </div>

      {/* Product Listing */}
      <div className="container mt-5 flex-grow">
        <ProductListing />
      </div>
    </div>
  );
};

export default Home;
