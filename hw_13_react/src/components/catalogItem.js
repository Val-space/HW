import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CatalogItem({ title, description, imgSrc, price }) {
  return (
    <Col>
      <Card  style={{ width: "17rem"} }>
        {" "}
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <Button variant="primary">See more</Button>
        </Card.Body>{" "}
      </Card>
    </Col>
  );
}
export default CatalogItem;
