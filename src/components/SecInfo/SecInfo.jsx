import styles from "../SecInfo/secInfo.module.scss";
export default function SecInfo(props) {
  return (
    <section className={styles.SecInfo}>
      <h1 className={styles.h1}>Information</h1>
      <p>nice text explaining our values</p>
    </section>
  );
}
