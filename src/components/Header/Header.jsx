import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.scss";

import LElement from "../LElement/LElement";
import { Link } from "react-router-dom";

import OffCanvasForm from "../OffCanvasForm/OffCanvasForm";
import LogIn from "../../pages/LogIn/LogIn";
import BtnLogOut from "../BtnLogOut/BtnLogOut";
import { useAuth } from "../../contexts/AuthContext";
import SignUp from "../../pages/SignUp/SignUp";

import styles from "../../sass/layout/buttons_links.module.scss";
import BtnLink from "../BtnLink/BtnLink";

export default function Header() {
  const { theUser } = useAuth();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link title="link to homepage" to="/">
            <LElement width="35" color="white"></LElement>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link title="link to how it works page" href="how-it-works" className={`${styles.linkButton} ${styles.other}`}>
                how it works
              </Nav.Link>

              <NavDropdown title="about" id="collasible-nav-dropdown" className={`${styles.linkButton} ${styles.other}`}>
                <NavDropdown.Item title="link to Littlessentials' story page" href="story">
                  Our story
                </NavDropdown.Item>
                <NavDropdown.Item title="link to Littlessentials' guide page" href="guide">
                  Our guide
                </NavDropdown.Item>
                <NavDropdown.Item title="link to Littlessentials' values page" href="values">
                  Our values
                </NavDropdown.Item>
                <NavDropdown.Item title="link to information about low carbon practices" href="lowcarbon">
                  Low carbon
                </NavDropdown.Item>
                <NavDropdown.Item title="link to frequently asked question's page" href="faq">
                  FAQ
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="partners" id="collasible-nav-dropdown" className={`${styles.linkButton} ${styles.other}`}>
                <NavDropdown.Item title="link to Littlessentials' partners page" href="brands">
                  Brands
                </NavDropdown.Item>
                <NavDropdown.Item title="link to Littlessentials' ngos page" href="ngos">
                  NGOs
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="connect" id="collasible-nav-dropdown" className={`${styles.linkButton} ${styles.other}`}>
                <NavDropdown.Item title="link to contact form form customers" href="get-in-touch">
                  Get in touch
                </NavDropdown.Item>
                <NavDropdown.Item title="link to contact form for potential partners" href="partner-with-us">
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
                  <BtnLink link={"/subscription"} label={"get started"} />
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
