import React, { useState, useEffect } from "react";
import Chat from "../../components/Chat/Chat";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../ScrollToTop";
import Header from "../../components/Header/Header";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import ProfileSettings from "./ProfileCmp/ProfileSettings";
import "./Profile.scss";

import { Card, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { getSubscription } from "../../modules/fetchSubscription";

export default function Profile(props) {
  const { theUser, logout, theUserName } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getSubscription(theUser.uid, setLoading);
  }, []);

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <ScrollToTop />
      <Header />
      <Chat />
      <section className="layout_profile">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Settings</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Subscription</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Billing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Messages</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Button variant="link" onClick={handleLogout}>
                    Log Out
                  </Button>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first" id="first">
                  <ProfileSettings />
                </Tab.Pane>
                <Tab.Pane eventKey="second" id="second">
                  <h4>Subscription edit page</h4>
                </Tab.Pane>
                <Tab.Pane eventKey="third" id="third">
                  <h4>Billing</h4>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth" id="fourth">
                  <h4>Messages page</h4>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth" id="fifth">
                  <h4>Log out</h4>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </section>
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Profile</h2>

              {error && <Alert variant="danger">{error}</Alert>}

              {theUser && (
                <>
                  <strong>Name: </strong>
                  <p>{theUser.displayName ? theUser.displayName : theUserName}</p>
                  <strong>Email: </strong>
                  <p>{theUser.email}</p>
                </>
              )}
              <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                Update Profile
              </Link>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
