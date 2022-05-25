import React from "react";

export default function InfoAside(props) {
  return (
    <aside>
      {props.selectedSize && <p>{props.selectedSize.name + " " + props.selectedSize.age}</p>}
      {props.selectedStyle && <p>{props.selectedStyle.name}</p>}
      {props.selectedPlan && <p>{props.selectedPlan.name}</p>}
    </aside>
  );
}
