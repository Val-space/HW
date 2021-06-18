import React from "react";
import CartItem from "./CartItem";
import "./css/cart.css";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart px-4 py-3 ">
      <h3>My cart:</h3>
      {cart.length? cart.map((cartEl) => (
        <CartItem key={cartEl.newItem.id} cartEl={cartEl} removeFromCart={removeFromCart}/>
      )) : <div>Cart is empty</div>}
    </div>
  );
};

export default Cart;
