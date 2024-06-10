import React from "react";

const categories = [
  "Bike Helmets",
  "Bike Lights",
  "Bike Locks",
  "Bike Gloves",
  "Bike Bottles",
  "Bike Pumps",
];

const ProductCategory: React.FC = () => {
  return (
    <div className="product-category">
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <a href={`/category/${category.toLowerCase().replace(/ /g, "-")}`}>
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategory;
