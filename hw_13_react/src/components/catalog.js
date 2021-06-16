import React, { useState, useEffect } from "react";
import CatalogItem from "./catalogItem";
import { getItems } from "./apiItems";
import Row from "react-bootstrap/Row";
import Loader from "./loader";

function Catalog() {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getItems().then((data) => {
      setShoes(data);
      setLoading(false);
    });
  }, []);
  return (
    <div style={{textAlign:'center'}}>
      <h1 style={{color:'rgb(48, 28, 9)'}} className="mb-4">Trainers & Shoes</h1>
      {loading && <Loader />}
      <Row xs={1} md={4} className="g-4">
        {shoes.map((shoe) => (
          <CatalogItem
            key={shoe.id}
            title={shoe.title}
            imgSrc={shoe.imgSrc}
            description={shoe.description}
            price={shoe.price}
          />
        ))}
      </Row>
    </div>
  );
}
export default Catalog;
