import styles from "../SecHeroe/secHeroe.module.scss";

export default function SecHeroe(props) {
  const style = {
    color: props.color,
  };

  return (
    <section className={styles.SecHeroe}>
      <div className={styles.wrapper}>
        <div className={styles.first}>
          <img className={styles.img} src="../assets/landing_img.webp" alt="white cards collection" />
          <p className={styles.p}>
            <strong>It Takes A Little Village</strong> to raise a child. We are here to simplify parenting, so you can focus on what really matters most - your family.
          </p>
        </div>
        <div className={styles.logo} style={style}>
          <h4 className={styles.h4}>
            <span className={styles.bold}>littl</span>essentials
          </h4>
          {/* <img className={styles.element} src={props.src} alt="" /> */}

          <h5 className={styles.h5}>simplifying parenthood in a conscious way</h5>
        </div>
      </div>
    </section>
  );
}
