import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Nike Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link><Link to='/about'>About</Link></Nav.Link> */}
          <Link className="pr-2" to="/">
            Catalog
          </Link>
          <Link className="pr-2" to="/about">
            About
          </Link>
          <Link className="pr-2" to="/contact-us">
            Contact us
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
  // return <Link to='/about'><Button>about</Button></Link>
}

export default Header;
