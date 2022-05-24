import React from "react";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import styles from "../Subscription/subscription.module.scss";
import { useAuth } from "../../contexts/AuthContext";

export default function FormSize(props) {
  // const [index, setIndex] = useState(null);
  const { theUserName } = useAuth();

  function handleChange(e) {
    props.setSelectedSize(e.currentTarget.value);
  }

  return (
    <Container className={`${styles.appear} d-flex flex-column align-items-center`}>
      {theUserName ? <h3>{`Let start ${theUserName}, which size would you need for your first set?`}</h3> : <h3>To start with, what size would you need for your first set?</h3>}

      <form action="" className={`${styles.formSize} mt-3 p-3`}>
        <div className={styles.box}>
          <input name="age" type="radio" id="newborn" value={1} onChange={handleChange} checked={Number(props.selectedSize) === 1} />
          <label htmlFor="newborn" className={`${styles.label} ${styles.chosed}`}>
            Newborn
            <br />
            <span>(0-3 months)</span>
          </label>
        </div>
        <div className={styles.box}>
          <input name="age" type="radio" id="baby" value={2} onChange={handleChange} checked={Number(props.selectedSize) === 2} />
          <label htmlFor="baby" className={`${styles.label} ${styles.chosed}`}>
            Baby
            <br />
            <span>(3-12 months)</span>
          </label>
        </div>
        <div className={styles.box}>
          <input name="age" type="radio" id="junior" value={3} onChange={handleChange} checked={Number(props.selectedSize) === 3} />
          <label htmlFor="junior" className={`${styles.label} ${styles.chosed}`}>
            Junior
            <br />
            <span>(1-3 years)</span>
          </label>
        </div>
        <div className={styles.box}>
          <input name="age" type="radio" id="youngster" value={4} onChange={handleChange} checked={Number(props.selectedSize) === 4} />
          <label htmlFor="youngster" className={`${styles.label} ${styles.chosed}`}>
            Youngster
            <br />
            <span>(3-6 years)</span>
          </label>
        </div>
      </form>
    </Container>
  );
}
