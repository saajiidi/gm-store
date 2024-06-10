import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Bike Helmet",
    image: "https://via.placeholder.com/300x300?text=Bike+Helmet",
    originalPrice: 120.0,
    discountedPrice: 100.0,
    quantity: 10,
  },
  {
    id: 2,
    name: "Bike Light",
    image: "https://via.placeholder.com/300x300?text=Bike+Light",
    originalPrice: 60.0,
    discountedPrice: 50.0,
    quantity: 15,
  },
  {
    id: 3,
    name: "Bike Lock",
    image: "https://via.placeholder.com/300x300?text=Bike+Lock",
    originalPrice: 40.0,
    discountedPrice: 30.0,
    quantity: 20,
  },
  // Add more products as needed
];

const ProductListing: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
