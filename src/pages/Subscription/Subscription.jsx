import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useSubscription } from "../../contexts/SubscriptionContext";
import styles from "../Subscription/subscription.module.scss";
import { Container, Row, Button, ProgressBar } from "react-bootstrap";

import Steps from "./Steps";
import InfoAside from "./InfoAside";
import FormSize from "./FormSize";
import FormStyle from "./FormStyle";
import FormPlan from "./FormPlan";
import FormDelivery from "./FormDelivery";
import FormSave from "./FormSave";
import FormPayment from "./FormPayment";
import Header from "../../components/Header/Header";

import { sizes, clothStyles, plans } from "../../modules/options";

export default function Subscription(props) {
  const [step, setStep] = useState(1);
  const [right, setRight] = useState(null);
  const [left, setLeft] = useState(null);

  const [position, setPosition] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);

  const [acepted, setAcepted] = useState(false);

  const { theUser, theUserName } = useAuth();

  const { selectedSize, selectedStyle, selectedPlan, address, deliveryAt, inSubscription, setInSubscription } = useSubscription();

  const deliveryValid = address && deliveryAt;

  const saved = theUser && inSubscription;

  const infoArr = [selectedSize, selectedStyle, selectedPlan, deliveryValid, saved, acepted];

  let visible1 = step === 1 || right === 1 || left === 1;
  let visible2 = step === 2 || right === 2 || left === 2;
  let visible3 = step === 3 || right === 3 || left === 3;
  let visible4 = step === 4 || right === 4 || left === 4;
  let visible5 = step === 5 || right === 5 || left === 5;
  let visible6 = step === 6 || right === 6 || left === 6;

  const now = ((step - 1) * 100) / (totalSteps - 1);

  useEffect(() => {
    setInSubscription(true);
  }, []);

  function prev() {
    if (step <= 1) return;
    setStep(step - 1);
  }

  function next() {
    if (step >= totalSteps) return;
    setStep(step + 1);
  }

  return (
    <>
      <Header />
      <Container className={`${styles.subscriptionWrapper}  pt-5 pb-5`}>
        <Row>
          <div className={`${styles.stepsFormWrapper} col-xl-8 `}>
            <Steps step={step} setStep={setStep} infoArr={infoArr} setTotalSteps={setTotalSteps} />
            <ProgressBar now={now} variant="info" className="w-100" />
            <div className="col-12 p-2">
              <Button
                disabled={step <= 1}
                className="col-4 col-md-2 btn btn-light fs-5"
                type="button"
                onClick={() => {
                  prev();
                }}
              >
                <span>&#8592;</span>prev
              </Button>
              {!visible6 && (
                <Button
                  disabled={!infoArr[step - 1]}
                  className="col-4 offset-4 col-md-2 offset-md-8 btn btn-light fs-5"
                  type="button"
                  onClick={() => {
                    next();
                  }}
                >
                  next <span>&#8594;</span>
                </Button>
              )}
            </div>
            <div className={`${styles.formsWrapper}`}>
              {visible1 && <FormSize />}
              {visible2 && <FormStyle />}
              {visible3 && <FormPlan />}
              {visible4 && <FormDelivery />}
              {visible5 && <FormSave />}
              {visible6 && <FormPayment acepted={acepted} setAcepted={setAcepted} />}
            </div>
          </div>
          <div className={`${styles.asideWrapper} col `}>
            <InfoAside selectedSize={sizes[selectedSize - 1]} selectedStyle={clothStyles[selectedStyle - 1]} selectedPlan={plans[selectedPlan - 1]} />
          </div>
        </Row>
        <Row>
          <div className="col col-xl-8 p-2">
            <Button
              disabled={step <= 1}
              className="col-4 col-md-2 btn btn-light fs-5"
              type="button"
              onClick={() => {
                prev();
              }}
            >
              <span>&#8592;</span>prev
            </Button>
            {!visible6 && (
              <Button
                disabled={!infoArr[step - 1]}
                className="col-4 offset-4 col-md-2 offset-md-8 btn btn-light fs-5"
                type="button"
                onClick={() => {
                  next();
                }}
              >
                next <span>&#8594;</span>
              </Button>
            )}
          </div>
        </Row>
      </Container>
    </>
  );
}
