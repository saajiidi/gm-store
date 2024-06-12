import React from "react";
import ProductCard from "./ProductCard";
import helmet1 from "../../assets/img/helmet1.jpg";
import helmet2 from "../../assets/img/helmet2.jpg";
import light1 from "../../assets/img/light1.jpg";
import light2 from "../../assets/img/light2.jpg";
import lock1 from "../../assets/img/lock1.jpg";
import lock2 from "../../assets/img/lock2.jpg";

const products = [
  {
    id: 1,
    name: "Bike Helmet",
    image: helmet1,
    originalPrice: 3000.0,
    discountedPrice: 2500.0,
    quantity: 10,
  },
  {
    id: 2,
    name: "Bike Light",
    image: light1,
    originalPrice: 300.0,
    discountedPrice: 200.0,
    quantity: 15,
  },
  {
    id: 3,
    name: "Bike Lock",
    image: lock1,
    originalPrice: 150.0,
    discountedPrice: 120.0,
    quantity: 20,
  },
  {
    id: 4,
    name: "Bike Helmet",
    image: helmet2,
    originalPrice: 5000.0,
    discountedPrice: 4000.0,
    quantity: 10,
  },
  {
    id: 5,
    name: "Bike Light",
    image: light2,
    originalPrice: 1500.0,
    discountedPrice: 1200.0,
    quantity: 15,
  },
  {
    id: 6,
    name: "Bike Lock",
    image: lock2,
    originalPrice: 5000.0,
    discountedPrice: 4000.0,
    quantity: 20,
  },
]; 
  // Add more products as needed


const ProductListing: React.FC = () => {
  return (
    <div className="container mt-5 ">
      <div className="row ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
