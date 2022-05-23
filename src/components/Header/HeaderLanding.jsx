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
      <Container>
        <Link to="/">
          <LElement width="35" color="white"></LElement>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#deets">sign up today </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
