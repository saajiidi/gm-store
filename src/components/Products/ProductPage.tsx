import React from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Bike Helmet",
    image: "https://via.placeholder.com/300x300?text=Bike+Helmet",
    originalPrice: 120.0,
    discountedPrice: 100.0,
    quantity: 10,
    description: "High-quality bike helmet.",
  },
  {
    id: 2,
    name: "Bike Light",
    image: "https://via.placeholder.com/300x300?text=Bike+Light",
    originalPrice: 60.0,
    discountedPrice: 50.0,
    quantity: 15,
    description: "Bright and durable bike light.",
  },
  // Add more products as needed
];

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const potentialProductId = productId; // Store to avoid type narrowing
  
  const product = products.find(
    (p) => p.id === parseInt(potentialProductId as string));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid" alt={product.name} />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>
            <del>${product.originalPrice.toFixed(2)}</del> $
            {product.discountedPrice.toFixed(2)}
          </p>
          <p>Quantity: {product.quantity}</p>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
