// src/pages/Home.tsx

import React from "react";
import Slider from "../components/Slider/Slider";
import ProductListing from "../components/Products/ProductListing";


const Home: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      {/* Slider */}
      <div className="container mx-auto mt-4">
        <Slider />
      </div>



      {/* Product Listing */}
      <div className="container mt-5 flex-grow">
        <ProductListing />
      </div>
    </div>
  );
};

export default Home;
