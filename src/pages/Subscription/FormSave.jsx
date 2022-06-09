import React, { useRef, useEffect } from "react";
import styles from "../Subscription/subscription.module.scss";
import { useAuth } from "../../contexts/AuthContext";
import { Button, Card, Container, Col, Row } from "react-bootstrap";
import { useButtonsState } from "../../contexts/ButtonsStateContext";

export default function FormSave(props) {
  const { theUser, theUserName } = useAuth();

  const { setShowSignup, setShowLogin } = useButtonsState();

  useEffect(() => {
    const userName = JSON.parse(localStorage.getItem("subscriber")).user.name;
    if (theUser && userName === null) {
      const subscription = JSON.parse(localStorage.getItem("subscriber"));
      subscription.user.name = theUserName;
      subscription.user.email = theUser.email;
      subscription.user.ID = theUser.uid;
      localStorage.setItem("subscriber", JSON.stringify(subscription));
    }
  }, [theUser]);

  const userName = theUser && theUser.displayName ? theUser.displayName.split(" ")[0] : theUserName.split(" ")[0];

  return (
    <Container className={`${styles.appear} d-flex align-items-center justify-content-center p-5`}>
      <Card style={{ width: "80%", maxWidth: "400px" }}>
        {theUser ? (
          <Card.Body className="p-5">Just one step more {userName}!</Card.Body>
        ) : (
          <>
            <Card.Body className="p-5">To save your preferences you just need to log in or sign up</Card.Body>
            <Row className="p-5">
              <Col className=" d-flex justify-content-center">
                <Button
                  onClick={() => {
                    setShowLogin(false);
                    setShowSignup(true);
                  }}
                >
                  Sign up
                </Button>
              </Col>

              <Col className=" d-flex justify-content-center">
                <Button
                  onClick={() => {
                    setShowSignup(false);
                    setShowLogin(true);
                  }}
                >
                  Log in{" "}
                </Button>
              </Col>
            </Row>
          </>
        )}
      </Card>
    </Container>
  );
}
