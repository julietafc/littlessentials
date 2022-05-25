import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.scss";

import LElement from "../LElement/LElement";
import { Link } from "react-router-dom";

export default function HeaderLanding() {
  return (
    <Navbar className="header_landing" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="header_wrapper">
        <Link to="/">
          <LElement width="55" color="white"></LElement>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link to="/">Discover more</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
