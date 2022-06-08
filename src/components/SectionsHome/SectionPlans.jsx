import React from "react";
import { Container, Row } from "react-bootstrap";
import Plan from "../Plan/Plan";
import { plans } from "../../modules/options";
import "./SectionPlans.scss";
import ButtonCmp from "../Button/Button";

export default function SectionPlans() {
  const plansList = plans.map((plan, i) => <Plan key={`plan-${i + 1}`} plan={plan} />);

  return (
    <div className="wrapper">
      <section className="plans">
        <div className="header">
          <h2>Our Plans</h2>
          <ButtonCmp label="Subscribe now" path="/subscription" title="link to subscription flow" />
        </div>
        <Container className="mb-5">
          <Row className="justify-content-center gy-4">{plansList}</Row>
        </Container>
      </section>
    </div>
  );
}
