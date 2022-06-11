import React, { useEffect, useState } from "react";
import { Form, Container, Accordion } from "react-bootstrap";
import { useAuth } from "../../../contexts/AuthContext";

export default function ProfileSettings(props) {
  const { theUser } = useAuth();
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    setSubscription(JSON.parse(localStorage.getItem("subscriber")));
  }, []);

  return (
    <>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Profile</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Form.Group id="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" required defaultValue={subscription && subscription.user.name.split(" ")[0]}></Form.Control>
              </Form.Group>
              <Form.Group id="lastname">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" required defaultValue={subscription && subscription.user.name.split(" ")[1]}></Form.Control>
              </Form.Group>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required defaultValue={subscription && subscription.user.email}></Form.Control>
              </Form.Group>
              <Form.Group id="phone">
                <Form.Label>Phone number</Form.Label>
                <Form.Control type="text" required defaultValue={subscription && subscription.address.phone}></Form.Control>
              </Form.Group>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Address</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Form.Group id="street">
                <Form.Label>Street Address</Form.Label>
                <Form.Control type="text" required defaultValue={subscription && subscription.address.streetNumber.split(",")[0]}></Form.Control>
              </Form.Group>
              <Form.Group id="aparmet">
                <Form.Label>Apartment/Unit</Form.Label>
                <Form.Control type="text" required defaultValue={subscription && subscription.address.streetNumber.split(",")[1]}></Form.Control>
              </Form.Group>
              <Form.Group id="city">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" required defaultValue={subscription && subscription.address.city}></Form.Control>
              </Form.Group>
              <Form.Group id="zipcode">
                <Form.Label>Zip code</Form.Label>
                <Form.Control type="text" required defaultValue={subscription && subscription.address.zipCode}></Form.Control>
              </Form.Group>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Payment</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Container className="d-flex justify-content-between">
                <Form.Group className="mb-3 col-4" controlId="formCC">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control type="number" placeholder="0000 0000 0000 0000" />
                </Form.Group>

                <Form.Group className="mb-3 col-4" controlId="formName">
                  <Form.Label>Name on card</Form.Label>
                  <Form.Control type="text" placeholder="Marie Luarsen" defaultValue={theUser.displayName} />
                </Form.Group>
                <Form.Group className="mb-3 col-2 " controlId="formEDate">
                  <Form.Label>Expire date</Form.Label>
                  <Form.Control type="text" placeholder="mm/yy" />
                </Form.Group>
                <Form.Group className="mb-3 col-1  " controlId="formCVV">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control type="text" placeholder="000" />
                </Form.Group>
              </Container>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Password</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Form.Group className="mb-3 col-3" id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3 col-3" id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3 col-3" id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required></Form.Control>
              </Form.Group>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
