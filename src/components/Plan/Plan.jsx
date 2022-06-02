import React, { useState } from "react";
import { Container, Col, Card, Button } from "react-bootstrap";

export default function Plan(props) {
  const plan = props.plan.name;
  const productList = props.plan.products.map((product, i) => <li key={plan + "pr" + i}>{product}</li>);
  const [showList, setShowList] = useState(false);

  return (
    <Col className=" col-12 col-sm-8 col-md-6 col-lg-4" style={{ height: "100%" }}>
      <Card className={`gap-1 rounded-3 border border-2 minHeight`}>
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
