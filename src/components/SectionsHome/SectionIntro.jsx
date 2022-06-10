import React, { useState } from "react";
// import { Button } from "react-bootstrap";
import styles from "./SectionIntro.module.scss";
import ButtonCmp from "../Button/Button";
import { useAuth } from "../../contexts/AuthContext";
import "../../App.scss";

export default function SectionIntro() {
  const { setShowSignup, setShowLogin } = useAuth();
  const [hover, setHover] = useState(false);
  const handleMauseOver = () => setHover(true);
  const handleMauseOut = () => setHover(false);

  return (
    <div className={styles.wrapper}>
      <section className={styles.SecInfo}>
        <div className={styles.images}>
          <img src="../assets/webP/littlessentials_playful-package2.webp" alt="kids clothes" />
          <img src="../assets/img02.webp" alt="girl holding a camera toy" />
          <img src="../assets/webP/littlessentials_earth-package.webp" alt="mix of products for children" />
        </div>
        <div className={styles.text}>
          <h1 className={styles.h1}>Inspiring a conscious lifestyle for parents</h1>
          <p>Get the best out of your time with your little ones by subscribing to a curated selection of clothes, toys & gear for children aged 0-6, that cater to their growth, developmental milestones and the changing seasons.</p>

          <ButtonCmp label="Subscribe now" title="link to subscription flow" onClick={() => setShowSignup(true)} />
        </div>
      </section>
    </div>
  );
}
