import React, { useState } from "react";

function Item({ name, category }) {
  const [cartButton, newCartButton] = useState(false)

  function buttonHandler() {
    newCartButton((cartButton) => !cartButton)
  }

  return (
    <li className={cartButton ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={buttonHandler}>{cartButton ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
