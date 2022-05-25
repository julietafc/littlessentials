import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.scss";

import { useRef, useEffect, useState } from "react";
import LElement from "../LElement/LElement";
import { Link } from "react-router-dom";

import LogInSlide from "../LogInSlide/LogInSlide";
import SignUp from "../../pages/SignUp/SignUp";
import LogIn from "../../pages/LogIn/LogIn";

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
            <Nav.Link href="how-it-works">how it works</Nav.Link>

            <NavDropdown title="about" id="collasible-nav-dropdown">
              <NavDropdown.Item href="story">Our story</NavDropdown.Item>
              <NavDropdown.Item href="guide">Our guide</NavDropdown.Item>
              <NavDropdown.Item href="values">Our values</NavDropdown.Item>
              <NavDropdown.Item href="lowcarbon">Low carbon</NavDropdown.Item>
              <NavDropdown.Item href="faq">FAQ</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="partners" id="collasible-nav-dropdown">
              <NavDropdown.Item href="brands">Brands</NavDropdown.Item>
              <NavDropdown.Item href="ngos">NGOs</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="connect" id="collasible-nav-dropdown">
              <NavDropdown.Item href="get-in-touch">Get in touch</NavDropdown.Item>
              <NavDropdown.Item href="partner-with-us">Partner with us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="signup">Get started</Nav.Link>
            {/* <Nav.Link eventKey={2} href="login">
              Log in
            </Nav.Link> */}
            <LogInSlide name="Log in">
              <LogIn></LogIn>
            </LogInSlide>
            <LogInSlide name="Sign up">
              <SignUp />
            </LogInSlide>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
