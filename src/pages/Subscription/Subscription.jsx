import React from "react";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import styles from "../Subscription/subscription.module.scss";
import Steps from "./Steps";
import InfoAside from "./InfoAside";

import FormAge from "./FormAge";
import Header from "../../components/Header/Header";

export default function Subscription(props) {
  console.log("subscription");
  const ages = [
    { name: "Newborn", age: "(0-3 months)" },
    { name: "Baby", age: "(3-12 months)" },
    { name: "Junior", age: "(1-3 years)" },
    { name: "Youngster", age: "(3-6 years)" },
  ];

  const [selectedAge, setSelectedAge] = useState(null);
  const { theUser, theUserName } = useAuth();

  return (
    <>
      <Header />
      <div className={styles.stepsFormWrapper}>
        <div>
          {theUser && (
            <>
              <strong>Name: </strong>
              <p>{theUser.displayName ? theUser.displayName : theUserName}</p>
              <strong>Email: </strong>
              <p>{theUser.email}</p>
            </>
          )}
        </div>
        <Steps />
        <FormAge selectedAge={selectedAge} setSelectedAge={setSelectedAge} ages={ages} />
      </div>
      <div className={styles.asideWrapper}>
        <InfoAside selectedAge={selectedAge} />
      </div>
    </>
  );
}
