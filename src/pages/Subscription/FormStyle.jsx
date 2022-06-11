import React from "react";
import styles from "../Subscription/subscription.module.scss";
import { Container, Row, Button, Col } from "react-bootstrap";
import { useSubscription } from "../../contexts/SubscriptionContext";
import { clothStyles } from "../../modules/options";

export default function FormStyle(props) {
  const { selectedStyle, setSelectedStyle } = useSubscription();

  const handleLocalStorage = (index) => {
    const subscription = JSON.parse(localStorage.getItem("subscriber"));
    subscription.clothStyle = clothStyles[index - 1];
    subscription.clothStyle.index = index;
    localStorage.setItem("subscriber", JSON.stringify(subscription));
  };

  const colorsList = clothStyles[selectedStyle ? selectedStyle - 1 : 0].colors.map((color, i) => {
    return <li key={color + i} style={{ backgroundColor: `#${color}`, maxWidth: "40px", width: "20%", borderRadius: "50%", aspectRatio: "1" }}></li>;
  });

  return (
    <Container className={styles.appear}>
      <Row>
        <h3 className="text-center">What style do you prefer?</h3>
      </Row>
      <Row className="justify-content-around mt-3">
        <Button
          variant="white"
          className={`col-4 col-xl-2 border-dark ${selectedStyle === 1 ? "btn-sun" : ""}`}
          onClick={() => {
            setSelectedStyle(1);
            handleLocalStorage(1);
          }}
        >
          playful
        </Button>
        <Button
          variant="white"
          className={`col-4 col-xl-2 border-dark ${selectedStyle === 2 ? "btn-sun" : ""}`}
          style={{ "--bs-border-opacity": " .5" }}
          onClick={() => {
            setSelectedStyle(2);
            handleLocalStorage(2);
          }}
        >
          earth
        </Button>
        <Button
          variant="white"
          className={`col-4 col-xl-2 border-dark ${selectedStyle === 3 ? "btn-sun" : ""}`}
          onClick={() => {
            setSelectedStyle(3);
            handleLocalStorage(3);
          }}
        >
          poetic
        </Button>
      </Row>
      <Row className="mt-5 justify-content-center mb-5">
        <Col className="d-none d-sm-block">
          <Row>
            <h4 className="text-center p-2">{clothStyles[selectedStyle ? selectedStyle - 1 : 0].name}</h4>
          </Row>
          <Row>
            <img src={clothStyles[selectedStyle ? selectedStyle - 1 : 0].url2} alt="styles packages" className="" />
          </Row>
        </Col>
        <Col className="  col-md-6">
          <Row>
            <img src={clothStyles[selectedStyle ? selectedStyle - 1 : 0].url1} alt="products for children" />
          </Row>
          <Row className="">
            <br />
            <p className="text-center">Contains these colors</p>
            <ul className={`${styles.colorList} d-flex justify-content-around`}>{colorsList}</ul>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
