import React from "react";
import { Button, Card, Col } from "react-bootstrap";

function CatalogItem({ item, addToCart, removeFromCart, cart }) {
  const isCartFull = cart.filter((el) => el.id === item.id).length;
  return (
    <Col className="my-2">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.imgSrc} />
        <Card.Body>
          <Card.Title>
            {item.brand} {item.model}
          </Card.Title>
          <Card.Text>Price:{item.price}$</Card.Text>
          {isCartFull ? (
            <Button variant="dark" onClick={() => removeFromCart(item.id)}>
              Remove from cart
            </Button>
          ) : (
            <Button variant="primary" onClick={() => addToCart(item.id)}>
              Add to cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CatalogItem;
