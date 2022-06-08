import React from "react";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import styles from "../Subscription/subscription.module.scss";
import { useAuth } from "../../contexts/AuthContext";
import { useSubscription } from "../../contexts/SubscriptionContext";
import { Subscription, sizes } from "../../modules/options";

export default function FormSize(props) {
  // const [index, setIndex] = useState(null);
  const { theUser, theUserName } = useAuth();
  const { selectedSize, setSelectedSize } = useSubscription();
  const userName = theUser && theUser.displayName ? theUser.displayName.split(" ")[0] : theUserName.split(" ")[0];

  function handleChange(e) {
    const index = e.currentTarget.value;
    setSelectedSize(index);

    const subscription = JSON.parse(localStorage.getItem("subscriber"));
    subscription.size = sizes[index - 1];
    subscription.size.index = index - 1;
    localStorage.setItem("subscriber", JSON.stringify(subscription));
  }

  return (
    <Container className={`${styles.appear} d-flex flex-column align-items-center`}>
      <h3>{`${userName ? `Let start ${userName}` : `To start with`}, which size would you need for your first set?`}</h3>

      <form action="" className={`${styles.formSize} mt-3 p-3`}>
        <div className={styles.box}>
          <input name="age" type="radio" id="newborn" value={1} onChange={handleChange} checked={Number(selectedSize) === 1} />
          <label htmlFor="newborn" className={`${styles.label} ${styles.chosed}`}>
            Newborn
            <br />
            <span>(0-3 months)</span>
          </label>
        </div>
        <div className={styles.box}>
          <input name="age" type="radio" id="baby" value={2} onChange={handleChange} checked={Number(selectedSize) === 2} />
          <label htmlFor="baby" className={`${styles.label} ${styles.chosed}`}>
            Baby
            <br />
            <span>(3-12 months)</span>
          </label>
        </div>
        <div className={styles.box}>
          <input name="age" type="radio" id="junior" value={3} onChange={handleChange} checked={Number(selectedSize) === 3} />
          <label htmlFor="junior" className={`${styles.label} ${styles.chosed}`}>
            Junior
            <br />
            <span>(1-3 years)</span>
          </label>
        </div>
        <div className={styles.box}>
          <input name="age" type="radio" id="youngster" value={4} onChange={handleChange} checked={Number(selectedSize) === 4} />
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
