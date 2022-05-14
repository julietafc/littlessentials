import styles from "../SecInfo/secInfo.module.scss";
export default function SecInfo(props) {
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
        <img src="../assets/pic02.webp" alt="" />
        <img src="../assets/pic01.webp" alt="" />
      </div>
      <div className={styles.text}>
        <h2 className={styles.h2}>Inspiring a conscious lifestyle for parents so you can focus on what matters most - your family.</h2>
        <p>Get the best out of your time with your little ones by subscribing to a curated selection of clothes, toys & gear for children aged 0-6, that cater to their growth, developmental milestones and the changing seasons.</p>
      </div>
    </section>
  );
}
