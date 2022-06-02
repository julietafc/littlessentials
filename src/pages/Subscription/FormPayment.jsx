import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";

export default function FormPayment(props) {
  const { theUser } = useAuth();

  const handleOnChange = () => {
    props.setAcepted(!props.acepted);
  };

  async function handleSubmit(e) {
    // function handleS
    e.preventDefault();

    // const subscription = JSON.parse(localStorage.getItem("subscriber"));
    // subscription.address = address;
    // localStorage.setItem("subscriber", JSON.stringify(subscription));
  }

  return (
    <Container className="col col-sm-8 col-md-6">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formCC">
          <Form.Label>Card Number</Form.Label>
          <Form.Control type="number" placeholder="0000 0000 0000 0000" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name on card</Form.Label>
          <Form.Control type="text" placeholder="Marie Luarsen" defaultValue={theUser.displayName} />
        </Form.Group>

        <Container className="d-flex justify-content-between">
          <Form.Group className="mb-3 col-4 " controlId="formEDate">
            <Form.Label>Expire date</Form.Label>
            <Form.Control type="text" placeholder="mm/yy" />
          </Form.Group>

          <Form.Group className="mb-3 col-4 col-md-3 " controlId="formCVV">
            <Form.Label>CVV</Form.Label>
            <Form.Control type="text" placeholder="000" />
          </Form.Group>
        </Container>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I'm agree with the terms and conditions" onChange={handleOnChange} />
        </Form.Group>

        <Button variant="primary" type="submit" className={`mt-3 px-5 border-2 rounded-pill ${props.acepted ? "" : "btn-outline-dark"} `} disabled={!props.acepted}>
          pay
        </Button>
      </Form>
    </Container>
  );
}
