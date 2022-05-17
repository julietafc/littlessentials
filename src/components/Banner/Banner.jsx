import styles from "../Banner/banner.module.scss";

export default function Banner(props) {
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>{props.heading}</h1>
      <p className={styles.p}>{props.text}</p>
    </section>
  );
}
