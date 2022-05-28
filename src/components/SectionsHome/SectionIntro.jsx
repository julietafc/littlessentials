import Button from "../Button/Button";
import styles from "./SectionIntro.module.scss";
// import pebble from "/assets/lake-pebble.svg";
import "../../App.scss";
import { Link } from "react-router-dom";
export default function SectionIntro() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.SecInfo}>
        {/* <div>
          <img className={styles.element} src={pebble} />
        </div> */}
        <div className={styles.images}>
          <img src="../assets/img01.webp" alt="kids clothes" />
          <img src="../assets/img02.webp" alt="girl holding a camera toy" />
          <img src="../assets/img03.webp" alt="sustainable sign on the beach" />
        </div>
        <div className={styles.text}>
          <h1 className={styles.h1}>Inspiring a conscious lifestyle for parents</h1>
          <p>Get the best out of your time with your little ones by subscribing to a curated selection of clothes, toys & gear for children aged 0-6, that cater to their growth, developmental milestones and the changing seasons.</p>
          <Link to="signup">
            <Button label="subscribe now" />
          </Link>
        </div>
      </section>
    </div>
  );
}
