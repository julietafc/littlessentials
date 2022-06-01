import React, { useEffect } from "react";
import styles from "../Subscription/subscription.module.scss";

function Step(props) {
  const selections = [props.selectedSize, props.selectedStyle, props.selectedPlan];

  const tick = props.step >= props.no && selections[props.no - 1];

  return (
    <div className={styles.step}>
      <input id={`step${props.no}`} type="radio" name="steps" value={props.no} checked={props.step == props.no} onChange={props.handleOnChange} />
      <label className={styles.label} htmlFor={`step${props.no}`}>
        <span className={`${styles.circle} ${styles.chosed} ${tick ? "fs-7 fw-bold " : ""} ${tick && styles.check} `}>{tick ? <>&#10003;</> : props.no}</span> {props.label}
      </label>
    </div>
  );
}

export default function Steps(props) {
  const handleOnChange = (e) => {
    console.log(e.target.value);
    props.setStep(Number(e.target.value));
  };

  const stepsLabels = ["size", "style", "plan", "delivery", "pay"];
  const amountOfSteps = stepsLabels.length;

  useEffect(() => {
    props.setTotalSteps(amountOfSteps);
  }, []);

  const noSteps = stepsLabels.map((label, i) => <Step key={"s-" + i} label={label} no={i + 1} handleOnChange={handleOnChange} {...props} />);

  return (
    <>
      <div className={styles.stepsContainer}>{noSteps}</div>
    </>
  );
}
