import React from "react";
import Button from "react-bootstrap/Button";

const CartItem = ({cartEl,removeFromCart}) => {
  return (
    <div>
      {cartEl.newItem.brand}
      {cartEl.newItem.model}
      <br />
      <Button variant='dark' className='my-2' onClick={() => removeFromCart(cartEl.newItem.id)}>
        remove item
      </Button>
    </div>
  );
};

export default CartItem;
