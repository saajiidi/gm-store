import React from "react";
import Slider from "../components/Slider/Slider";
import ProductCard from "../components/Products/ProductCard";

const Home: React.FC = () => {
  const products = [
    // mock product data
    {
      id: 1,
      name: "Helmet",
      image: "https://via.placeholder.com/150",
      originalPrice: 50,
      discountedPrice: 30,
      quantity: 10,
    },
    {
      id: 2,
      name: "Bike Light",
      image: "https://via.placeholder.com/150",
      originalPrice: 20,
      discountedPrice: 15,
      quantity: 5,
    },
    // add more products as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <Slider />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
