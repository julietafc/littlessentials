import React from "react";
import styles from "../Subscription/subscription.module.scss";

export default function Steps(props) {
  const handleOnChange = (e) => {
    console.log(e.target.value);
    props.setStep(Number(e.target.value));
  };
  return (
    <div className={styles.stepsContainer}>
      <div className={styles.step}>
        <input id="step1" type="radio" name="steps" value={1} checked={props.step == 1} onChange={handleOnChange} />
        <label className={styles.label} htmlFor="step1">
          <span className={`${styles.circle} ${styles.chosed}`}>1</span> size
        </label>
      </div>
      <div className={styles.step}>
        <input id="step2" type="radio" name="steps" value={2} checked={props.step == 2} onChange={handleOnChange} />
        <label className={styles.label} htmlFor="step2">
          <span className={`${styles.circle} ${styles.chosed}`}>2</span> style
        </label>
      </div>
      <div className={styles.step}>
        <input id="step3" type="radio" name="steps" value={3} checked={props.step == 3} onChange={handleOnChange} />
        <label className={styles.label} htmlFor="step3">
          <span className={`${styles.circle} ${styles.chosed}`}>3</span> plan
        </label>
      </div>
      <div className={styles.step}>
        <input id="step4" type="radio" name="steps" value={4} checked={props.step == 4} onChange={handleOnChange} />
        <label className={styles.label} htmlFor="step4">
          <span className={`${styles.circle} ${styles.chosed}`}>4</span> save
        </label>
      </div>
    </div>
  );
}
