import React from "react";
import { Link } from "react-router-dom";
import { FaBoxOpen } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  quantity: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discountPercentage = Math.floor(
    ((product.originalPrice - product.discountedPrice) /
      product.originalPrice) *
      100
  );

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <span>
          <s className="absolute top-2 left-2 text-left text-red-500 text-xl">
            &#2547;{product.originalPrice.toFixed(2)}
          </s>
          <p className="absolute top-2 right-2 text-left text-green-500 text-xl">
            &#2547;{product.discountedPrice.toFixed(2)}
          </p>
        </span>
        <Link to={`/product/${product.id}`} className="block relative">
          <div className="flex justify-center items-center h-60">
            <img
              src={product.image}
              alt={product.name}
              className="card-img-top h-full object-cover"
            />
            <span className="absolute top-2 right-2 bg-orange-500 text-white font-bold py-2 px-4 rounded-full">
              -{discountPercentage}%
            </span>
            <span className="absolute bottom-2 left-2 bg-green-500 text-white py-2 px-4 rounded-full">
              <FaBoxOpen className="mr-2" /> {product.quantity}
            </span>
          </div>
        </Link>
        <div className="card-body">
          <Link
            to={`/product/${product.id}`}
            className="no-underline text-chocolate font-bold block text-center"
          >
            <h5 className="card-title">{product.name}</h5>
          </Link>

          <div className="flex justify-between mt-4 space-x-2">
            <button className="w-1/2 bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Add to Cart
            </button>
            <button className="w-1/2 bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
