import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CatalogItem({ shoe,addToCart,removeFromCart,cart }) {
  return (
    <Col>
      <Card  style={{ width: "17rem"} }>
        {" "}
        <Card.Img variant="top" src={shoe.imgSrc} />
        <Card.Body>
          <Card.Title>{shoe.title}</Card.Title>
          <Card.Text>{shoe.description}</Card.Text>
          <Card.Text>{shoe.price}</Card.Text>
          {cart.filter(el => el.id === shoe.id).length ? <Button onClick={() => removeFromCart(shoe.id)} variant="light">Remove from cart</Button> :
          <Button onClick={() => addToCart(shoe.id)} variant="primary">Add to cart</Button>} 
          
        </Card.Body>{" "}
      </Card>
    </Col>
  );
}
export default CatalogItem;
 