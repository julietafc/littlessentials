import React, { useState, useEffect } from "react";
import styles from "../Subscription/subscription.module.scss";
import { Container, Row, Button, Col, Spinner, Card } from "react-bootstrap";
import { useSubscription } from "../../contexts/SubscriptionContext";
import { plans } from "../../modules/options";

function Plan(props) {
  const { selectedPlan, setSelectedPlan } = useSubscription();
  const plan = props.plan.name;
  const productList = props.plan.products.map((product, i) => <li key={plan + "pr" + i}>{product}</li>);

  const [showList, setShowList] = useState(false);

  const handleLocalStorage = (index) => {
    const subscription = JSON.parse(localStorage.getItem("subscriber"));
    subscription.plan = plans[index];
    subscription.plan.index = index;
    localStorage.setItem("subscriber", JSON.stringify(subscription));
  };

  return (
    <Col>
      <Card className={`gap-1 rounded-3 ${selectedPlan === props.no ? "border-info border-2" : ""} `}>
        <Card.Header as="h5" className={`text-center ${props.plan.bestValue ? "bg-info" : " bg-white border-white text-white"}`}>
          BEST VALUE
        </Card.Header>
        <Card.Body className="gap-3">
          <Card.Title className="text-center fs-3">{props.plan.name}</Card.Title>
          <Card.Subtitle className="text-center fs-5">{props.plan.period}</Card.Subtitle>
          <Container className="d-flex justify-content-between border-bottom mt-3">
            <p className="fs-4">{props.plan.items} items</p>
            <p className="fs-4 fw-bolder">{props.plan.price} kr</p>
          </Container>
          <Button
            variant="white"
            className={`w-100 border-dark mt-3 ${selectedPlan === props.no ? "btn-sun" : ""}`}
            onClick={() => {
              setSelectedPlan(props.no);
              handleLocalStorage(props.no - 1);
            }}
          >
            {props.plan.btnLabel}
          </Button>
          <Container className="d-flex justify-content-center d-sm-none">
            <Button variant="link" onClick={() => setShowList(!showList)}>
              {!showList ? "more details ⯆" : "less details ⯅"}
            </Button>
          </Container>
          <div className={!showList && `d-none d-sm-block`}>
            <h5 className="mt-4">What’s included?</h5>
            <ul>{productList}</ul>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default function FormPlan(props) {
  const plansList = plans.map((plan, i) => <Plan key={"p-" + i} plan={plan} no={i + 1} {...props} />);

  return (
    <Container className={` ${styles.appear} mb-3`}>
      <Row>
        <h3 className="text-center">Choose your plan</h3>
      </Row>
      <Row className="mt-3 gap-4">{plansList}</Row>
    </Container>
  );
}
