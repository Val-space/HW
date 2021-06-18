import React, { useState, useEffect } from "react";
import CatalogItem from "./catalogItem";
import Cart from './cart';
import { getItems } from "./apiItems";
import Row from "react-bootstrap/Row";
import Loader from "./loader";

function Catalog() {
  const [catalogItems, setCatalogItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart,setCart] = useState([]);

  useEffect(() => {
    getItems().then((data) => {
      setCatalogItems(data);
      setLoading(false);
    });
  }, []);

  const addToCart = (id) => {
    let itemToAdd = catalogItems.filter(el => el.id === id)[0];
    setCart([...cart, {catalogItem:itemToAdd, id, count: 1}]);
  }
  const removeFromCart = id => {
    setCart(cart.filter(cartItem => cartItem.id !== id))
}

  return (
    <div style={{textAlign:'center'}}>
      <h1 style={{color:'rgb(48, 28, 9)'}} className="mb-4">Trainers & Shoes</h1>
      {loading && <Loader />}
      {cart.length? <Cart cart={cart} removeFromCart={removeFromCart}/> : ''}
      
      <Row xs={1} md={4} className="g-4">
        {catalogItems.map((shoe) => (
          <CatalogItem key ={shoe.id} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart}
           shoe={shoe}
          />
        ))}
      </Row>
    </div>
  );
}
export default Catalog;
