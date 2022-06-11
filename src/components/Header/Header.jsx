import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useLocation } from "react-router-dom";
import "./Header.scss";

import LElement from "../LElement/LElement";
import { Link } from "react-router-dom";

import OffCanvasForm from "../OffCanvasForm/OffCanvasForm";
import SignUp from "../../pages/SignUp/SignUp";
import LogIn from "../../pages/LogIn/LogIn";
import BtnLogOut from "../BtnLogOut/BtnLogOut";
import { useAuth } from "../../contexts/AuthContext";

import styles from "../../sass/layout/buttons_links.module.scss";
import BtnLink from "../BtnLink/BtnLink";

export default function Header() {
  let location = useLocation();
  const { theUser } = useAuth();
  const [activePage, setActivePage] = useState("");
  const [about, setAbout] = useState(false);
  const [partners, setPartners] = useState(false);
  const [connect, setConnect] = useState(false);

  useEffect(() => {
    setActivePage(location.pathname);

    ["/story", "/guide", "/values", "/lowcarbon", "/faq"].forEach((key) => {
      if (key === location.pathname) {
        setAbout(true);
      }
    });
    ["/brands", "/ngos"].forEach((key) => {
      if (key === location.pathname) {
        setPartners(true);
      }
    });
    ["/get-in-touch", "/partner-with-us"].forEach((key) => {
      if (key === location.pathname) {
        setConnect(true);
      }
    });
  }, []);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link title="link to homepage" to="/">
            <LElement width="35" color="white"></LElement>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" activeKey={activePage}>
              <Nav.Link title="link to how it works page" href="how-it-works" className={`${styles.linkButton} ${location.pathname === "/how-it-works" && styles.linkActive}  ${styles.other} `}>
                how it works
              </Nav.Link>

              <NavDropdown title="about" id="collasible-nav-dropdown" className={`${styles.linkButton} ${about && styles.linkActive} ${styles.other}`}>
                <NavDropdown.Item title="link to Littlessentials' story page" href="story" eventKey="/story">
                  Our story
                </NavDropdown.Item>
                <NavDropdown.Item title="link to Littlessentials' guide page" href="guide" eventKey="/guide">
                  Our guide
                </NavDropdown.Item>
                <NavDropdown.Item title="link to Littlessentials' values page" href="values" eventKey="/values">
                  Our values
                </NavDropdown.Item>
                <NavDropdown.Item title="link to information about low carbon practices" href="lowcarbon" eventKey="/lowcarbon">
                  Low carbon
                </NavDropdown.Item>
                <NavDropdown.Item title="link to frequently asked question's page" href="faq" eventKey="/faq">
                  FAQ
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="partners" id="collasible-nav-dropdown" className={`${styles.linkButton} ${partners && styles.linkActive} ${styles.other}`}>
                <NavDropdown.Item title="link to Littlessentials' partners page" href="brands" eventKey="/brands">
                  Brands
                </NavDropdown.Item>
                <NavDropdown.Item title="link to Littlessentials' ngos page" href="ngos" eventKey="/ngos">
                  NGOs
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="connect" id="collasible-nav-dropdown" className={`${styles.linkButton} ${connect && styles.linkActive} ${styles.other}`}>
                <NavDropdown.Item title="link to contact form form customers" href="get-in-touch" eventKey="/get-in-touch">
                  Get in touch
                </NavDropdown.Item>
                <NavDropdown.Item title="link to contact form for potential partners" href="partner-with-us" eventKey="/partner-with-us">
                  Partner with us
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {theUser ? (
                <>
                  <BtnLink link={"/subscription"} label={"subscription"} />
                  <BtnLink link={"/profile"} label={"profile"} />
                  <BtnLogOut />
                </>
              ) : (
                <>
                  <OffCanvasForm name="signup" btnLabel="invisible">
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
