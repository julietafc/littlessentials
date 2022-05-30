import React from "react";
import { promotions } from "../../modules/promotions";
import styles from "./promoBanner.module.scss";

export default function PromoBanner(props) {
  const promotionsList = promotions.map((promo, i) => <li key={`p-${i}`}>{promo}</li>);

  return (
    <div className={styles.promo_wrapper}>
      <ul>{promotionsList}</ul>
    </div>
  );
}
