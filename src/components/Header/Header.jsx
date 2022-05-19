import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useRef, useEffect, useState } from "react";
import LElement from "../LElement/LElement";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <LElement width="35" color="white"></LElement>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="how it works" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Step by step</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">FAQ</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="about" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Our story</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Our guide</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Core values</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Low carbon</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">partners</Nav.Link>
            <NavDropdown title="connect" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Get in touch</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Partner with us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Get started</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Log in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
