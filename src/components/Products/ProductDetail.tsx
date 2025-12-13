import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaShareAlt, FaComment, FaShoppingCart, FaCheck } from "react-icons/fa";
import { products } from "../../data/demoData";
import { useCart } from "../../context/CartContext";


const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const [selectedImage, setSelectedImage] = useState<string>("");

  if (!productId) {
    return <div>Product not found</div>;
  }

  const product = products.find((p) => p.id === productId);

  // Initialize selectedImage when product loads
  React.useEffect(() => {
    if (product?.image) {
      setSelectedImage(product.image);
    }
  }, [product]);

  if (!product) {
    return <div className="text-center py-20 text-2xl">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // Reset after 2 seconds
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center p-4 h-[400px]">
            <img src={selectedImage || product.image} alt={product.name} className="max-w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {product.images?.map((img, idx) => (
              <div
                key={idx}
                className={`w-24 h-24 flex-shrink-0 cursor-pointer border-2 rounded-lg overflow-hidden ${selectedImage === img ? 'border-blue-500' : 'border-transparent'}`}
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-blue-600 tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full">{product.category}</span>
              <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                <FaStar className="text-yellow-400 mr-2" />
                <span className="font-bold text-gray-800">{product.rating}</span>
                <span className="text-gray-400 mx-2">|</span>
                <span className="text-gray-500 text-sm">{product.reviews} reviews</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4 leading-tight">{product.name}</h1>
          </div>

          <p className="text-gray-500 text-lg mb-8 leading-relaxed font-light">{product.description}</p>

          <div className="text-4xl font-extrabold text-gray-900 mb-8 flex items-baseline">
            &#2547;{product.price.toLocaleString()}
            <span className="text-base font-normal text-gray-400 ml-2">invoice included</span>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            <div className="flex items-center border-2 border-gray-200 rounded-full bg-white">
              <button
                className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors text-xl font-bold text-gray-600"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >-</button>
              <span className="w-12 text-center font-bold text-lg">{quantity}</span>
              <button
                className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors text-xl font-bold text-gray-600"
                onClick={() => setQuantity(quantity + 1)}
              >+</button>
            </div>
            <button
              onClick={handleAddToCart}
              className={`flex-1 font-bold h-14 px-8 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg ${added
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-gray-900 hover:bg-blue-600 text-white"
                }`}
            >
              {added ? (
                <><FaCheck className="mr-2" /> Added to Cart</>
              ) : (
                <><FaShoppingCart className="mr-2" /> Add to Cart</>
              )}
            </button>
          </div>

          <div className="flex space-x-6 mt-auto pt-8 border-t border-gray-100">
            <button className="flex items-center text-gray-500 hover:text-gray-900 transition-colors font-medium">
              <FaComment className="mr-2" /> Write a Review
            </button>
            <button className="flex items-center text-gray-500 hover:text-gray-900 transition-colors font-medium">
              <FaShareAlt className="mr-2" /> Share Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProductDetail;
