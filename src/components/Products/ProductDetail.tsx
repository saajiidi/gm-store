import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaShareAlt, FaComment, FaShoppingCart, FaCheck } from "react-icons/fa";
import { products } from "../../data/demoData";


const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [quantity, setQuantity] = useState(1);

  if (!productId) {
    return <div>Product not found</div>;
  }

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div className="text-center py-20 text-2xl">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center p-4">
          <img src={product.image} alt={product.name} className="max-w-full h-auto object-contain hover:scale-105 transition-transform duration-300" />
        </div>

        <div className="flex flex-col">
          <div className="mb-4">
            <span className="text-sm font-bold text-blue-600 tracking-wide uppercase">{product.category}</span>
            <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-2">{product.name}</h1>
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400 text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"} />
                ))}
              </div>
              <span className="text-gray-500 text-sm">({product.reviews} reviews)</span>
            </div>
          </div>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed">{product.description}</p>

          <div className="text-3xl font-bold text-gray-900 mb-8">&#2547;{product.price.toLocaleString()}</div>

          <div className="flex items-center space-x-4 mb-8">
            <div className="flex items-center border border-gray-300 rounded-full">
              <button
                className="px-4 py-2 hover:bg-gray-100 rounded-l-full"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >-</button>
              <span className="px-4 py-2 font-bold min-w-[3rem] text-center">{quantity}</span>
              <button
                className="px-4 py-2 hover:bg-gray-100 rounded-r-full"
                onClick={() => setQuantity(quantity + 1)}
              >+</button>
            </div>
            <button className="flex-1 bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center">
              <FaShoppingCart className="mr-2" /> Add to Cart
            </button>
          </div>

          <div className="flex space-x-4 mt-auto pt-8 border-t border-gray-100">
            <button className="flex items-center text-gray-500 hover:text-black transition-colors">
              <FaComment className="mr-2" /> Write a Review
            </button>
            <button className="flex items-center text-gray-500 hover:text-black transition-colors">
              <FaShareAlt className="mr-2" /> Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

