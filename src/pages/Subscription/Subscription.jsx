import React from "react";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import styles from "../Subscription/subscription.module.scss";
import { Container, Row, Button, ProgressBar } from "react-bootstrap";
import Steps from "./Steps";
import InfoAside from "./InfoAside";
import FormStyle from "./FormStyle";
import FormPlan from "./FormPlan";
import Header from "../../components/Header/Header";
import FormSize from "./FormSize";
import { sizes, clothStyles, plans } from "../../modules/options";

export default function Subscription(props) {
  // const clothStyles = [
  //   {
  //     name: "playful",
  //     colors: ["F6ECEC", "EEEFFD", "C1C0CF", "DD8C58", "383F48"],
  //     url1: "./assets/im01.png",
  //     url2: "./assets/img07.png",
  //   },
  //   {
  //     name: "earth",
  //     colors: ["FFF8F8", "F2E3DB", "D0D0D0", "E5AE4A", "AB5E11"],
  //     url1: "./assets/im01.png",
  //     url2: "./assets/img07.png",
  //   },
  //   {
  //     name: "poetic",
  //     colors: ["F5F5FC", "EAD2BF", "F0AFA7", "B17562", "89482B"],
  //     url1: "./assets/im01.png",
  //     url2: "./assets/img07.png",
  //   },
  // ];

  const [step, setStep] = useState(1);
  const [right, setRight] = useState(null);
  const [left, setLeft] = useState(null);
  const [position, setPosition] = useState(0);

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const { theUser, theUserName } = useAuth();

  let visible1 = step === 1 || right === 1 || left === 1;
  let visible2 = step === 2 || right === 2 || left === 2;
  let visible3 = step === 3 || right === 3 || left === 3;
  let visible4 = step === 4 || right === 4 || left === 4;

  const now = step * 25;

  function prev() {
    if (step <= 1) return;
    setStep(step - 1);
  }

  function next() {
    if (step >= 4) return;
    setStep(step + 1);
  }

  return (
    <>
      <Header />
      <Container className={`${styles.subscriptionWrapper}  pt-5 pb-5`}>
        <Row>
          <div className={`${styles.stepsFormWrapper} col-xl-8 `}>
            <Steps step={step} setStep={setStep} />
            <ProgressBar now={now} variant="info" className="w-100" />
            <div className={`${styles.formsWrapper}`}>
              {visible1 && <FormSize selectedSize={selectedSize} setSelectedSize={setSelectedSize} />}
              {visible2 && <FormStyle selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle} />}
              {visible3 && <FormPlan selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />}
              {visible4 && <FormSize selectedSize={selectedSize} setSelectedSize={setSelectedSize} />}
            </div>
          </div>
          <div className={`${styles.asideWrapper} col `}>
            <InfoAside selectedSize={sizes[selectedSize - 1]} selectedStyle={clothStyles[selectedStyle - 1]} selectedPlan={plans[selectedPlan - 1]} />
          </div>
        </Row>
        <Row>
          <div className="col-xl-8 p-2">
            <Button
              disabled={step <= 1}
              className="col-xl-2 btn btn-light"
              type="button"
              onClick={() => {
                prev();
              }}
            >
              {"<=prev"}
            </Button>
            <Button
              disabled={step >= 4}
              className="col-xl-2 offset-md-8 btn btn-light"
              type="button"
              onClick={() => {
                next();
              }}
            >
              {"next=>"}
            </Button>
          </div>
        </Row>
      </Container>
    </>
  );
}
