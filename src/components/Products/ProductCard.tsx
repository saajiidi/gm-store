import React from "react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image: string;
    originalPrice: number;
    discountedPrice: number;
    quantity: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="col-md-4 product-card">
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">
            <del>${product.originalPrice.toFixed(2)}</del> $
            {product.discountedPrice.toFixed(2)}
          </p>
          <p className="card-text">Quantity: {product.quantity}</p>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
