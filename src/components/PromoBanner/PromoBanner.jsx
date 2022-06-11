import React from "react";
import { promotions } from "../../modules/promotions";
import styles from "./promoBanner.module.scss";

export default function PromoBanner() {
  const promotionsList = promotions.map((promo, i) => <li key={`p-${i}`}>{promo}</li>);

  return (
    <div className={`${styles.promo_wrapper} d-none d-md-block`}>
      <ul>{promotionsList}</ul>
    </div>
  );
}
