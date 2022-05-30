import React from "react";
import styles from "../Subscription/subscription.module.scss";
import { Container, Row, Button, Col, Spinner, Card } from "react-bootstrap";
import { plans } from "../../modules/options";

function Plan(props) {
  const plan = props.plan.name;
  const productList = props.plan.products.map((product, i) => <li key={plan + "pr" + i}>{product}</li>);

  return (
    <Col>
      <Card className={`gap-1 rounded-3 ${props.selectedPlan === props.no ? "border-info border-2" : ""} `}>
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
          <>
            <h5 className="mt-4">What’s included?</h5>
            <ul>{productList}</ul>
          </>
          <Button
            variant="white"
            className={`w-100 border-dark mt-3 ${props.selectedPlan === props.no ? "btn-sun" : ""}`}
            onClick={() => {
              props.setSelectedPlan(props.no);
            }}
          >
            {props.plan.btnLabel}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default function FormPlan(props) {
  const plansList = plans.map((plan, i) => <Plan key={"p-" + i} plan={plan} no={i + 1} {...props} />);

  return (
    <Container className={` ${styles.appear}`}>
      <Row>
        <h3 className="text-center">Choose your plan</h3>
      </Row>
      <Row className="mt-3">{plansList}</Row>
    </Container>
  );
}
