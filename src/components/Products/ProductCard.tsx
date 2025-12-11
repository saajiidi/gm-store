import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { Product } from "../../data/demoData";
import { useCart } from "../../context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to product detail
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full border border-gray-100">
      <Link to={`/product/${product.id}`} className="relative group block overflow-hidden bg-gray-100 h-64 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
      </Link>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold tracking-wide uppercase text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {product.category}
          </span>
          <div className="flex items-center text-yellow-400 text-sm">
            <FaStar className="mr-1" />
            <span className="text-gray-600 font-medium">({product.rating})</span>
          </div>
        </div>

        <Link to={`/product/${product.id}`} className="no-underline group">
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 line-clamp-1 mb-1">
            {product.name}
          </h3>
        </Link>

        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">Price</span>
            <span className="text-xl font-bold text-gray-900">&#2547;{product.price.toLocaleString()}</span>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center bg-black hover:bg-gray-800 text-white p-3 rounded-full transition-colors duration-300 shadow-lg transform active:scale-95"
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};


export default ProductCard;
