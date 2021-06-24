import React from "react";
import Button from "react-bootstrap/Button";

const CartItem = ({ cartEl, removeFromCart, changeQuantity }) => {
  return (
    <div style={{ fontSize: "1.1rem" }}>
      {cartEl.newItem.brand}
      {cartEl.newItem.model}
      <br />
      <input
        className="form-control my-2"
        type="number"
        min={1}
        defaultValue={cartEl.count}
        onChange={(e) => changeQuantity(cartEl.newItem.id, e.target.value)}
      ></input>
      <div style={{ fontSize: "1.3rem" }} className="text-center">
        {cartEl.newItem.price * cartEl.count}${" "}
      </div>
      <Button
        variant="dark"
        className="my-3"
        onClick={() => removeFromCart(cartEl.newItem.id)}
      >
        remove item
      </Button>
      <hr />
    </div>
  );
};

export default CartItem;
