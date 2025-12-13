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
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden border border-gray-100 relative">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-gray-50 h-[300px] flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-8 transform group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <span className="bg-white text-black px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-black hover:text-white">
            View Details
          </span>
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-grow relative z-10 bg-white">
        <div className="flex justify-between items-start mb-3">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {product.category}
          </span>
          <div className="flex items-center text-yellow-400 text-sm bg-yellow-50 px-2 py-1 rounded-full">
            <FaStar className="mr-1" />
            <span className="text-gray-700 font-bold">{product.rating}</span>
          </div>
        </div>

        <Link to={`/product/${product.id}`} className="no-underline group/title">
          <h3 className="text-xl font-bold text-gray-900 group-hover/title:text-blue-600 transition-colors duration-200 line-clamp-1 mb-2">
            {product.name}
          </h3>
        </Link>

        {/* <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">{product.description}</p> */}

        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-medium">Price</span>
            <span className="text-2xl font-extrabold text-gray-900">&#2547;{product.price.toLocaleString()}</span>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center bg-gray-900 hover:bg-blue-600 text-white w-12 h-12 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform active:scale-95 group-hover:scale-110"
            title="Add to Cart"
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};


export default ProductCard;
