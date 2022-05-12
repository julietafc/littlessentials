import styles from "../BtnCO2/btnCO2.module.scss";

export default function BtnCO2(props) {
  return (
    <a className={styles.btnCO2}>
      <p>
        this website <br />
        emites 0.49g
        <br /> of CO2 <br />
      </p>
      <p className={styles.arrow}>&#8594;</p>
    </a>
  );
}
