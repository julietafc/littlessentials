import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.scss";

import { useRef, useEffect, useState } from "react";
import LElement from "../LElement/LElement";
import { Link } from "react-router-dom";

import OffCanvasForm from "../OffCanvasForm/OffCanvasForm";
import PromoBanner from "../PromoBanner/PromoBanner";
import SignUp from "../../pages/SignUp/SignUp";
import LogIn from "../../pages/LogIn/LogIn";
// import LogOut from "../LogOut/LogOut";
import BtnLogOut from "../BtnLogOut/BtnLogOut";
import { useAuth } from "../../contexts/AuthContext";
import { Button } from "react-bootstrap";

import styles from "../../sass/layout/buttons_links.module.scss";
import BtnLink from "../BtnLink/BtnLink";

export default function Header() {
  const { theUser, theUserName, logout } = useAuth();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <LElement width="35" color="white"></LElement>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="how-it-works" className={`${styles.linkButton} ${styles.other}`}>
                how it works
              </Nav.Link>

              <NavDropdown title="about" id="collasible-nav-dropdown" className={`${styles.linkButton} ${styles.other}`}>
                <NavDropdown.Item href="story">Our story</NavDropdown.Item>
                <NavDropdown.Item href="guide">Our guide</NavDropdown.Item>
                <NavDropdown.Item href="values">Our values</NavDropdown.Item>
                <NavDropdown.Item href="lowcarbon">Low carbon</NavDropdown.Item>
                <NavDropdown.Item href="faq">FAQ</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="partners" id="collasible-nav-dropdown" className={`${styles.linkButton} ${styles.other}`}>
                <NavDropdown.Item href="brands">Brands</NavDropdown.Item>
                <NavDropdown.Item href="ngos">NGOs</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="connect" id="collasible-nav-dropdown" className={`${styles.linkButton} ${styles.other}`}>
                <NavDropdown.Item href="get-in-touch">Get in touch</NavDropdown.Item>
                <NavDropdown.Item href="partner-with-us">Partner with us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {/* <Nav.Link href="signup">Get started</Nav.Link>
            <Nav.Link eventKey={2} href="login">
              Log in
            </Nav.Link> */}
              {theUser ? (
                <>
                  <BtnLink link={"/subscription"} label={"subscription"} />
                  <BtnLink link={"/profile"} label={"profile"} />
                  <BtnLogOut />
                </>
              ) : (
                <>
                  <OffCanvasForm name="signup" btnLabel="get started">
                    <SignUp />
                  </OffCanvasForm>
                  <OffCanvasForm name="login" btnLabel="login">
                    <LogIn />
                  </OffCanvasForm>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
