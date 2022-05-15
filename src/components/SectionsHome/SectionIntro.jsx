import Button from "../Button/Button";
import styles from "./SectionIntro.module.scss";
export default function SectionIntro(props) {
  const img2Style = {
    // transition: "transform .3s linear",
    transform: `translateY(-${200 + props.offsetY * 0.2}px)`,
  };
  const img1Style = {
    // transition: "transform .3s linear",
    transform: `translateY(-${props.offsetY * 0.5}px)`,
  };

  return (
    <section className={styles.SecInfo}>
      <div className={styles.images}>
        <img src="../assets/im01.png" alt="" />
        <img src="../assets/img02.png" alt="" />
        <img src="../assets/img03.png" alt="" />
      </div>
      <div className={styles.text}>
        <h1 className={styles.h1}>Inspiring a conscious lifestyle for parents so you can focus on what matters most - your family.</h1>
        <p>Get the best out of your time with your little ones by subscribing to a curated selection of clothes, toys & gear for children aged 0-6, that cater to their growth, developmental milestones and the changing seasons.</p>
        <Button label="subscribe now" />
      </div>
    </section>
  );
}
