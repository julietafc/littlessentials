import React, { useRef, useState } from "react";
import styles from "../Subscription/subscription.module.scss";
import { Form, Button, Card, Alert, Container, Spinner, Col, Row } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function FormAddress() {
  const streetRef = useRef();
  const zipcodeRef = useRef();
  const cityRef = useRef();
  const phoneRef = useRef();

  async function handleSubmit(e) {
    // function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit} className="pb-4">
      <Form.Group id="street" className="mb-3">
        <Form.Label>Street and no.</Form.Label>
        <Form.Control type="text" ref={streetRef} required></Form.Control>
      </Form.Group>
      <Form.Group id="zipcode" className="mb-3">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="text" inputMode="numeric" ref={zipcodeRef} required></Form.Control>
      </Form.Group>
      <Form.Group id="city" className="mb-3">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" ref={cityRef} required></Form.Control>
      </Form.Group>
      <Form.Group id="phone" className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="tel" ref={phoneRef} required></Form.Control>
      </Form.Group>
    </Form>
  );
}

export default function FormDelivery() {
  const [option, setOption] = useState("home");

  const handleChange = (e) => {
    console.log(e.target.defaultValue);
    setOption(e.target.defaultValue);
  };

  return (
    <Container className={`${styles.appear}`}>
      <Row className="gx-5">
        <Col>
          <Row>
            <h3 className="text-center mb-4">Delivery Options</h3>
          </Row>
          <Row>
            <Card>
              <Card.Body>
                <Form onChange={handleChange} className={`${styles.radioDelivery} pb-4`}>
                  <Form.Group>
                    <Form.Check type="radio" label={`delivery home`} id={`delivery-home`} name="delivery" value={"home"} defaultChecked />
                    <Form.Check type="radio" label={`packe shop`} id={`packeshop'`} name="delivery" value={"shop"} />
                    <Form.Check type="radio" label={`mother help`} id={`mother`} name="delivery" value={"ong"} />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Row>
        </Col>
        <Col>
          <Row>
            <h3 className="text-center mb-4">Address</h3>
          </Row>
          <Row>
            <Card>
              <Card.Body>
                {option === "home" && <FormAddress />}
                {option === "home" && <FormAddress />}
                {option === "home" && <FormAddress />}
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
