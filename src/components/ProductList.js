import React from "react";
import { Link } from "react-router-dom";
import { products } from "./data";

const ProductList = () => {
  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <Link to={`/products/${p.id}`}>{p.title}</Link>
          <p>Price: {p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
