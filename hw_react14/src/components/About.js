import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="container text-center my-5">
        <h1>ABOUT NIKE</h1>
        <div
          style={{
            maxWidth: "80%",
            margin: "0 auto",
            fontWeight: "500",
            fontSize: "1.2rem",
          }}
        >
          Our mission is what drives us to do everything possible to expand
          human potential. We do that by creating groundbreaking sport
          innovations, by making our products more sustainably, by building a
          creative and diverse global team and by making a positive impact in
          communities where we live and work. <br /> Based in Beaverton, Oregon,
          NIKE, Inc. includes the Nike, Converse, and Jordan brands.
        </div>
        <Link to="/catalog">
          <Button variant="info" className="my-4">
            Go back
          </Button>
        </Link>
      </div>
    </>
  );
}
export default About;
