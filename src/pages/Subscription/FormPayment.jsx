import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { useSubscription } from "../../contexts/SubscriptionContext";
import { postSubscription } from "../../modules/fetchSubscription";
import { useNavigate } from "react-router-dom";
import styles from "./subscription.module.scss";

export default function FormPayment(props) {
  const { theUser } = useAuth();
  const { setIsPaid } = useSubscription();
  const [loading, setLoading] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const userName = theUser.displayName.split(" ")[0];
  const navigate = useNavigate();

  const handleOnChange = () => {
    props.setAcepted(!props.acepted);
  };

  async function handleSubmit(e) {
    // function handleS
    e.preventDefault();
    const subscription = JSON.parse(localStorage.getItem("subscriber"));
    subscription.isPaid = true;
    console.log(subscription);
    localStorage.setItem("subscriber", JSON.stringify(subscription));
    setLoading(true);
    setIsPaid(true);
    postSubscription(theUser.uid, subscription).then(() => {
      setLoading(false);
      setShowThanks(true);
    });
  }

  function resetAndBack(e) {
    navigate("/", { replace: true });
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
          {loading && <span className="spinner-grow spinner-border-sm" role="status" aria-hidden="true"></span>}
          {loading ? "Loading..." : "pay"}
        </Button>
      </Form>
      {showThanks && (
        <div className={styles.thanksModal}>
          <div>
            <object id="hand" data="assets/one_line.svg" width="40%" height="40%" type="image/svg+xml"></object>
            <h3>{`Thanks for your preference ${userName}!`}</h3>
            <Button variant="primary" type="button" className={`mt-3 px-5 text-primary rounded-pill bg-transparent`} onClick={resetAndBack}>
              Take me back home
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
}
