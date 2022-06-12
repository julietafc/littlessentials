import React from "react";
import styles from "./SectionIntro.module.scss";
import ButtonCmp from "../Button/Button";
import "../../App.scss";

export default function SectionIntro() {
  return (
    <div className={styles.wrapper}>
      <section className={`${styles.SecInfo}`}>
        <div className={`${styles.images} `}>
          {/* <div className={`${styles.parallaxLayer} ${styles.baseLayer}`}>
            <img src="../assets/webP/littlessentials_playful-package2.webp" alt="kids clothes" />
          </div>
          <div className={`${styles.parallaxLayer} ${styles.midLayer}`}>
            <img src="../assets/img02.webp" alt="girl holding a camera toy" />
          </div>
          <div className={`${styles.parallaxLayer} ${styles.topLayer}`}>
            <img src="../assets/webP/littlessentials_earth-package.webp" alt="mix of products for children" />
          </div> */}
        </div>
        <div className={styles.text}>
          <h1 className={styles.h1}>Inspiring a conscious lifestyle for parents</h1>
          <p>Get the best out of your time with your little ones by subscribing to a curated selection of clothes, toys & gear for children aged 0-6, that cater to their growth, developmental milestones and the changing seasons.</p>

          <ButtonCmp label="Subscribe now" title="link to subscription flow" path="/subscription" />
        </div>
      </section>
    </div>
  );
}
