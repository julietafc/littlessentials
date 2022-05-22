import React from "react";
import styles from "../Subscription/subscription.module.scss";

export default function Steps() {
  return (
    <div className={styles.stepsContainer}>
      <div className={styles.step}>
        <input id="step1" type="radio" name="steps" value={1} />
        <label className={styles.label} htmlFor="step1">
          1
        </label>
        <p>size</p>
      </div>
      <div className={styles.step}>
        <input id="step2" type="radio" name="steps" value={1} />
        <label className={styles.label} htmlFor="step2">
          2
        </label>
        <p>style</p>
      </div>
      <div className={styles.step}>
        <input id="step3" type="radio" name="steps" value={1} />
        <label className={styles.label} htmlFor="step3">
          3
        </label>
        <p>plan</p>
      </div>
      <div className={styles.step}>
        <input id="step4" type="radio" name="steps" value={1} />
        <label className={styles.label} htmlFor="step4">
          4
        </label>
        <p>save</p>
      </div>
    </div>
  );
}
