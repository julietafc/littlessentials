import React from "react";
import { Card } from "react-bootstrap";
import { useSubscription } from "../../contexts/SubscriptionContext";
import { sizes, clothStyles, plans } from "../../modules/options";
import styles from "./subscription.module.scss";

export default function InfoAside(props) {
  const { selectedSize, selectedStyle, selectedPlan } = useSubscription();

  return (
    <aside>
      <h3>Summary</h3>
      <Card style={{ width: "18rem" }} className="mb-2 bg-transparent p-5 border-0 gap-3">
        <Card.Body className="border-bottom border-2 border-sun p-3 rounded-3">
          <Card.Title> size: </Card.Title>
          <Card.Text>{selectedSize && sizes[selectedSize - 1].name}</Card.Text>
          <Card.Text style={{ marginTop: "-1.5rem" }}>{selectedSize && sizes[selectedSize - 1].age}</Card.Text>
        </Card.Body>
        <Card.Body className="border-bottom border-2 border-sun p-3 rounded-3">
          <Card.Title> style: </Card.Title>
          <Card.Text>{selectedStyle && clothStyles[selectedStyle - 1].name}</Card.Text>
        </Card.Body>
        <Card.Body className="border-bottom border-2 border-sun p-3 rounded-3">
          <Card.Title> plan: </Card.Title>
          <Card.Text>{selectedPlan && plans[selectedPlan - 1].name}</Card.Text>
          <Card.Text style={{ marginTop: "-1.5rem" }}>{selectedPlan && plans[selectedPlan - 1].period}</Card.Text>
        </Card.Body>
        {selectedPlan && (
          <Card.Text className="fs-5">
            Total: {plans[selectedPlan - 1].price}kr <span className="fs-6">/{plans[selectedPlan - 1].periodNom}</span>
          </Card.Text>
        )}
      </Card>
    </aside>
  );
}
