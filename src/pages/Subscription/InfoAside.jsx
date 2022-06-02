import React from "react";
import { Card } from "react-bootstrap";
import styles from "./subscription.module.scss";

export default function InfoAside(props) {
  return (
    <aside>
      <h3>Summary</h3>
      <Card style={{ width: "18rem" }} className="mb-2 bg-transparent p-5 border-0 gap-3">
        <Card.Body className="border-bottom border-2 border-sun p-3 rounded-3">
          <Card.Title> size: </Card.Title>
          <Card.Text>{props.selectedSize && props.selectedSize.name}</Card.Text>
          <Card.Text style={{ marginTop: "-1.5rem" }}>{props.selectedSize && props.selectedSize.age}</Card.Text>
        </Card.Body>
        <Card.Body className="border-bottom border-2 border-sun p-3 rounded-3">
          <Card.Title> style: </Card.Title>
          <Card.Text>{props.selectedStyle && props.selectedStyle.name}</Card.Text>
        </Card.Body>
        <Card.Body className="border-bottom border-2 border-sun p-3 rounded-3">
          <Card.Title> plan: </Card.Title>
          <Card.Text>{props.selectedPlan && props.selectedPlan.name}</Card.Text>
          <Card.Text style={{ marginTop: "-1.5rem" }}>{props.selectedPlan && props.selectedPlan.period}</Card.Text>
        </Card.Body>
        {props.selectedPlan && (
          <Card.Text className="fs-5">
            Total: {props.selectedPlan.price}kr <span className="fs-6">/{props.selectedPlan.periodNom}</span>
          </Card.Text>
        )}
      </Card>
    </aside>
  );
}
