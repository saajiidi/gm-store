import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../../data/demoData";


const ProductListing: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Bike Accessories</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our premium collection of bike accessories designed for safety, comfort, and performance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;

