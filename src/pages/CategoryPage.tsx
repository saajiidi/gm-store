import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/Products/ProductCard";
import { products } from "../data/demoData";


const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  // Filter products based on category (case-insensitive)
  const categoryProducts = categoryId
    ? products.filter(p => p.category.toLowerCase() === categoryId.toLowerCase())
    : products;

  return (
    <div className="container mx-auto p-4 py-8">
      <h2 className="text-3xl font-bold mb-8 capitalize">{categoryId || "All Products"}</h2>
      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-12">
          <p className="text-xl">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;

