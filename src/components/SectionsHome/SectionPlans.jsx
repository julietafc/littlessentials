import React from "react";
import { Container, Row } from "react-bootstrap";
import Plan from "../../pages/Subscription/Plan";
import { plans } from "../../modules/options";

export default function SectionPlans() {
  const plansList = plans.map((plan, i) => <Plan key={`plan-${i + 1}`} plan={plan} />);

  return (
    <Container className="mb-5">
      <Row>{plansList}</Row>
    </Container>
  );
}
