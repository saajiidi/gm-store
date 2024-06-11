import React from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaShareAlt, FaComment } from "react-icons/fa";

// Mock data
const products = [
  {
    id: 1,
    name: "Bike Helmet",
    image: "https://via.placeholder.com/300x300?text=Bike+Helmet",
    originalPrice: 120.0,
    discountedPrice: 100.0,
    quantity: 10,
  },
  // Add other products
];

interface Product {
  id: number;
  name: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  quantity: number;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Product not found</div>;
  }

  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p>Original Price: ${product.originalPrice.toFixed(2)}</p>
          <p>Discounted Price: ${product.discountedPrice.toFixed(2)}</p>
          <p>Quantity: {product.quantity}</p>
          <div className="d-flex align-items-center mt-3">
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
          </div>
          <div className="mt-3">
            <button className="btn btn-primary mr-2">
              <FaComment className="mr-1" /> Comment
            </button>
            <button className="btn btn-secondary">
              <FaShareAlt className="mr-1" /> Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
