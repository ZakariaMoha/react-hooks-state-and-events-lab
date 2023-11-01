import React from "react";

function Item({ name, category }) {
  return (
    <div>
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
    </div>
  );
}

export default Item;
