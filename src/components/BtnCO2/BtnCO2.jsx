import styles from "../BtnCO2/btnCO2.module.scss";

import { useState } from "react";

export default function BtnCO2(props) {
  function onClick() {
    const [show, setShow] = useState(false);
  }

  return (
    <button onClick={() => props.setShow(true)} className={styles.btnCO2}>
      <p>
        this website only <br />
        emites 0.49g
        <br /> of CO2 <br />
      </p>
      {/* <p className={styles.arrow}>&#8594;</p> */}
    </button>
  );
}
