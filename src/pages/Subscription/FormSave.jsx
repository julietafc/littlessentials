import React, { useRef, useEffect } from "react";
import styles from "../Subscription/subscription.module.scss";
import { Form, Button, Card, Container, Col, Row } from "react-bootstrap";
import { useSubscription } from "../../contexts/SubscriptionContext";

export default function FormSave() {
  return (
    <Container className={`${styles.appear} d-flex align-items-center justify-content-center p-5`}>
      <Card style={{ width: "80%", maxWidth: "400px" }}>
        <Card.Body className="p-5">To save your preferences you just need to log in or sign up</Card.Body>
        <Row className="p-5">
          <Col className=" d-flex justify-content-center">
            <Button>Sign up</Button>
          </Col>

          <Col className=" d-flex justify-content-center">
            <Button>Log in </Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
