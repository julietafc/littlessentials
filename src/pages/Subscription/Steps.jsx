import React, { useEffect } from "react";
import styles from "../Subscription/subscription.module.scss";
import { useSubscription } from "../../contexts/SubscriptionContext";

function Step(props) {
  const { isPaid } = useSubscription();
  const tick = (props.step >= props.no && props.infoArr[props.no - 1]) || isPaid;

  return (
    <div className={styles.step}>
      <input id={`step${props.no}`} type="radio" name="steps" value={props.no} checked={props.step == props.no} onChange={props.handleOnChange} />
      <label className={`${styles.label} d-flex flex-column flex-md-row gap-md-2 align-items-center`} htmlFor={`step${props.no}`}>
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

  const stepsLabels = ["size", "style", "plan", "delivery", "save", "pay"];
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
