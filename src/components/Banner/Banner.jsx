import styles from "../Banner/banner.module.scss";

export default function Banner(props) {
  const styleBanner = { backgroundColor: props.bgColor, color: props.color };
  return (
    <div className="banner">
      <section style={styleBanner} className={styles.section}>
        <div className={styles.wrapper}>
          <h1 className={styles.h1}>{props.heading}</h1>
          <p className={styles.p}>{props.text}</p>
        </div>
      </section>
    </div>
  );
}
