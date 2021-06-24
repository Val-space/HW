import React, { useContext } from "react";
import CartItem from "./CartItem";
import TotalSum from "./TotalSum";
import {PageContext} from "./Context";

import "./css/cart.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Cart = ({ cart, removeFromCart, changeQuantity }) => {
  const {location} = useContext(PageContext);
  return (
    <div className="cart-outer">
      <div className="cart px-4 py-3 ">
        <h3>My cart:</h3>
        {cart.length ? (
          cart.map((cartEl) => (
            <CartItem
              key={cartEl.newItem.id}
              cartEl={cartEl}
              removeFromCart={removeFromCart}
              changeQuantity={changeQuantity}
            />
          ))
        ) : (
          <div>Cart is empty</div>
        )}
      </div>
      {cart.length ? (
        <>
          <TotalSum cart={cart} />
          {/* <input
            type={"text"}
            defaultValue={location.country}
            className="form-control"
            onChange={e =>
               setLocation({...location, country: e.target.value })
            }
          ></input> */}
          <div> {location.country? <div>Country: {location.country} </div> : <div>Chose your Country</div> }{location.city? <div>City: {location.city}</div> : <div>Chose your city</div>}</div>

          <Link to={"./confirmation"}>
            <Button variant="danger" className="my-3">
              Confirm your order
            </Button>
          </Link>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
