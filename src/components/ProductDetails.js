import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { products } from "./data";

const ProductDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const product = products.find((p) => p.id === Number(id));

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>

      <button className="btn" onClick={() => history.push("/")}>
        Back
      </button>
    </div>
  );
};

export default ProductDetails;
