import React, { useRef, useState, useEffect } from "react";
import styles from "../Subscription/subscription.module.scss";
import { Form, Button, Card, Alert, Container, Spinner, Col, Row } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function FormAddress(props) {
  const streetRef = useRef();
  const zipcodeRef = useRef();
  const cityRef = useRef();
  const phoneRef = useRef();

  async function handleSubmit(e) {
    // function handleS
    e.preventDefault();

    const address = {
      streetNumber: streetRef.current.value,
      zipCode: zipcodeRef.current.value,
      city: cityRef.current.value,
      phone: phoneRef.current.value,
    };

    props.setAddress(address);

    const subscription = JSON.parse(localStorage.getItem("subscriber"));
    subscription.address = address;
    localStorage.setItem("subscriber", JSON.stringify(subscription));
  }

  return (
    <Form onSubmit={handleSubmit} className="pb-4">
      <Form.Group id="street" className="mb-3">
        <Form.Label>Street and no.</Form.Label>
        <Form.Control type="text" ref={streetRef} required defaultValue={props.address && props.address.streetNumber}></Form.Control>
      </Form.Group>
      <Form.Group id="zipcode" className="mb-3">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="text" inputMode="numeric" ref={zipcodeRef} required defaultValue={props.address && props.address.zipCode}></Form.Control>
      </Form.Group>
      <Form.Group id="city" className="mb-3">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" ref={cityRef} required defaultValue={props.address && props.address.city}></Form.Control>
      </Form.Group>
      <Form.Group id="phone" className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="tel" ref={phoneRef} required defaultValue={props.address && Number(props.address.phone)}></Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3 ">
        Confirm address
      </Button>
    </Form>
  );
}

export default function FormDelivery(props) {
  const checkHomeRef = useRef();

  useEffect(() => {
    if (props.address && !props.deliveryAt) {
      checkHomeRef.current.focus();
    }
  }, [props.address]);

  const handleChange = (e) => {
    console.log(e.target.defaultValue);
    props.setDeliveryAt(e.target.defaultValue);
    const subscription = JSON.parse(localStorage.getItem("subscriber"));
    subscription.deliveryAt = e.target.defaultValue;
    localStorage.setItem("subscriber", JSON.stringify(subscription));
  };

  return (
    <Container className={`${styles.appear}`}>
      <Row className="gx-5 d-flex flex-column flex-lg-row ">
        <Col className="col-lg-6">
          <Row>
            <h3 className="text-center mb-4">Address {props.address && <span className="text-success">✓</span>}</h3>
          </Row>
          <Row>
            <Card>
              <Card.Body>
                <FormAddress {...props} />
              </Card.Body>
            </Card>
          </Row>
        </Col>
        <Col className={props.address ? "col-lg-6" : "col-lg-6 pe-none text-black-50"}>
          <Row>
            <h3 className="text-center mb-4">Delivery Options</h3>
          </Row>
          <Row>
            <Card>
              <Card.Body>
                <Form className={`${styles.radioDelivery} pb-4`}>
                  <Form.Group>
                    <Form.Check type="radio" label={`delivery home`} id={`delivery-home`} name="delivery" value={"home"} onChange={handleChange} checked={props.deliveryAt === "home"} ref={checkHomeRef} />
                    <Form.Check type="radio" label={`pick up point`} id={`packeshop'`} name="delivery" value={"shop"} onChange={handleChange} checked={props.deliveryAt === "shop"} />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
