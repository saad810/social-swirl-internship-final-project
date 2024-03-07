import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
// import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" >
      <Container fluid className = "py-2"> 
        <Link to="/" className="text-decoration-none">
          <Navbar.Brand>Final Project</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Item>
              <Link to="/" className="px-2 text-light text-decoration-none">
                Home
              </Link>
            </Nav.Item>
            <Link to="/todo" className="px-2 text-light text-decoration-none">
              <Nav.Item>Todo App</Nav.Item>
            </Link>
            <Link to="/words" className="text-light px-2 text-decoration-none">
              <Nav.Item>Words App</Nav.Item>
            </Link>
            <Nav.Item>
              <Link
                to="/wordsSlice"
                className="text-light px-2 text-decoration-none"
              >
                Words App Redux
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
