import React, { useState, useEffect } from "react";
import { ApiCatalog } from "./ApiCatalog";
import CatalogItem from "./CatalogItem";
import Cart from './Cart';
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";


function Catalog() {
  const [catalogItems, setCatalogItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    ApiCatalog().then((data) => setCatalogItems(data));
  }, []);

  const addToCart = id =>{
      let itemToAdd = catalogItems.filter(el => el.id === id)[0];
      setCart([...cart, {newItem:itemToAdd,id , count:1}]);
      console.log(cart);
  }
  const removeFromCart = id => {
    console.log(id)
    setCart(cart.filter(el => el.id !== id));
  }

  return (
    <Container className="mt-5">
        <h1>Bags</h1>
    <Cart cart={cart} removeFromCart={removeFromCart}/>
      <Row xs={1} md={3}>
        {catalogItems.map((item) => (
          <CatalogItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />
        ))}
      </Row>
    </Container>
  );
}

export default Catalog;
