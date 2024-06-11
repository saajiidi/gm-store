import React from "react";
import { Link } from "react-router-dom";

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
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} className="card-img-top" />
        </Link>
        <div className="card-body">
          <Link to={`/product/${product.id}`}>
            <h5 className="card-title">{product.name}</h5>
          </Link>
          <p className="card-text">
            Original Price: ${product.originalPrice.toFixed(2)}
          </p>
          <p className="card-text">
            Discounted Price: ${product.discountedPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
