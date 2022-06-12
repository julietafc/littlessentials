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
import InfoAside from "../Subscription/InfoAside";
import "./Profile.scss";

import { Card, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { useSubscription } from "../../contexts/SubscriptionContext";
import { Link, useNavigate } from "react-router-dom";
import { getSubscription, patchSubscription, postSubscription } from "../../modules/fetchSubscription";

export default function Profile(props) {
  const { theUser, logout, theUserName } = useAuth();
  const { setSelectedSize, setSelectedStyle, setSelectedPlan } = useSubscription();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscriptionRes, setSubscription] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("subscriber") || theUser) {
      setLoading(true);
      getSubscription(theUser.uid).then((res) => {
        setSubscription(res[0].subscription);
        console.log(res[0].subscription);
        localStorage.setItem("subscriber", JSON.stringify(res[0].subscription));
        setLoading(false);
      });
    }
    // if (theUser) {
    //   setLoading(true);
    //   getSubscription(theUser.uid).then((res) => {
    //     console.log(res);
    //     localStorage.setItem("subscriber", JSON.stringify(res[0].subscription));
    //     setLoading(false);
    //   });
    // }
  }, []);

  useEffect(() => {
    if (subscriptionRes) {
      setSelectedSize(Number(subscriptionRes.size.index));
      setSelectedStyle(Number(subscriptionRes.clothStyle.index));
      setSelectedPlan(Number(subscriptionRes.plan.index));
    }
  }, [subscriptionRes]);

  // useEffect(() => {
  //   const abortFetch = new AbortController();
  //   const subscription = JSON.parse(localStorage.getItem("subscriber"));
  //   if (theUser) {
  //     setLoading(true);
  //     getSubscription(theUser.uid, abortFetch).then((res) => {
  //       console.log(res);
  //       if (res.length > 0 && res[0]._id) {
  //         patchSubscription(res[0]._id, { subscription: subscription }).then((res) => {
  //           console.log("patched with", res.status);
  //           setLoading(false);
  //         });
  //       } else {
  //         postSubscription(theUser.uid, subscription).then((res) => {
  //           console.log("post with", res);
  //           setLoading(false);
  //         });
  //       }
  //     });
  //   }
  //   return () => abortFetch.abort();
  // }, []);

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
                  <Nav.Link eventKey="third">Messages</Nav.Link>
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
                  {loading ? <h2>loading...</h2> : <ProfileSettings />}
                </Tab.Pane>
                <Tab.Pane eventKey="second" id="second">
                  {loading ? <h2>loading...</h2> : <InfoAside />}
                </Tab.Pane>
                <Tab.Pane eventKey="third" id="fourth">
                  <h4>Messages page</h4>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </section>
      {/* <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
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
      </Container> */}
      <Footer />
    </>
  );
}
