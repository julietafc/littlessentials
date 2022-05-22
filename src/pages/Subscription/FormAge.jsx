import React from "react";
import { useEffect, useState } from "react";
import styles from "../Subscription/subscription.module.scss";

export default function FormAge(props) {
  // const [index, setIndex] = useState(null);

  function handleChange(e) {
    // setIndex(e.target.defaultValue);
    props.setSelectedAge(props.ages[e.target.defaultValue - 1]);
  }

  return (
    <>
      <h2>To start with, what size would you need for your first set?</h2>
      <p>{props.selectedAge && props.selectedAge.name}</p>
      <p>{props.selectedAge && props.selectedAge.age}</p>
      <form action="" className={styles.formAge}>
        <div className={styles.box}>
          <input name="age" type="radio" id="newborn" value={1} onChange={handleChange} />
          <label htmlFor="newborn" className={styles.label}>
            Newborn
            <br />
            <span>(0-3 months)</span>
          </label>
        </div>
        <div className={styles.box}>
          <input name="age" type="radio" id="baby" value={2} onChange={handleChange} />
          <label htmlFor="baby" className={styles.label}>
            Baby
            <br />
            <span>(3-12 months)</span>
          </label>
        </div>
        <div className={styles.box}>
          <input name="age" type="radio" id="junior" value={3} onChange={handleChange} />
          <label htmlFor="junior" className={styles.label}>
            Junior
            <br />
            <span>(1-3 years)</span>
          </label>
        </div>
        <div className={styles.box}>
          <input name="age" type="radio" id="youngster" value={4} onChange={handleChange} />
          <label htmlFor="youngster" className={styles.label}>
            Youngster
            <br />
            <span>(3-6 years)</span>
          </label>
        </div>
      </form>
    </>
  );
}
