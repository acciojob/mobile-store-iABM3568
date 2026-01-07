import React, { useState } from "react";
import { products as initialProducts } from "./data";
import { useHistory } from "react-router-dom";

const AdminPanel = () => {
  const [items, setItems] = useState([...initialProducts]);
  const history = useHistory();

  const addProduct = () => {
    setItems([
      ...items,
      {
        id: items.length + 1,
        title: "New Product",
        description: "New Description",
        image: "",
        price: 1000
      }
    ]);
  };

  const deleteProduct = (id) => {
    setItems(items.filter((p) => p.id !== id));
  };

  const updatePrice = (id, price) => {
    setItems(
      items.map((p) =>
        p.id === id ? { ...p, price: Number(price) } : p
      )
    );
  };

  return (
    <div>
      {items.map((p) => (
        <div key={p.id}>
          <input
            className="form-control"
            defaultValue={p.price}
            onChange={(e) => updatePrice(p.id, e.target.value)}
          />

          <button
            className="float-right"
            onClick={() => deleteProduct(p.id)}
          >
            Delete
          </button>

          <button
            className="float-right"
            onClick={() => history.push(`/products/${p.id}`)}
          >
            Save
          </button>
        </div>
      ))}

      <button onClick={addProduct}>Add</button>
    </div>
  );
};

export default AdminPanel;
