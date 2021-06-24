import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Confirmation() {
  return (
    <>
      <div
        style={{ backgroundColor: "#70b3d3", color: "white" }}
        className="text-center my-5 p-5"
      >
        <h2>Thank you! Your order is confirmed!</h2>
        <Link to={"./"}>
          <Button variant="light" className="mt-4">
            Return to catalog
          </Button>
        </Link>
      </div>
    </>
  );
}
export default Confirmation;
