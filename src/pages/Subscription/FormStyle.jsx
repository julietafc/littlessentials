import React, { useState, useEffect } from "react";
import styles from "../Subscription/subscription.module.scss";
import { Container, Row, Button, Col, Spinner } from "react-bootstrap";
import { clothStyles } from "../../modules/options";

export default function FormStyle(props) {
  const handleLocalStorage = (index) => {
    const subscription = JSON.parse(localStorage.getItem("subscriber"));
    subscription.clothStyle = clothStyles[index];
    localStorage.setItem("subscriber", JSON.stringify(subscription));
  };

  const colorsList = clothStyles[props.selectedStyle ? props.selectedStyle - 1 : 0].colors.map((color, i) => {
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
          className={`col-4 col-xl-2 border-dark ${props.selectedStyle === 1 ? "btn-sun" : ""}`}
          onClick={() => {
            props.setSelectedStyle(1);
            handleLocalStorage(1 - 1);
          }}
          // autoFocus={props.selectedStyle === 1 || !props.selectedStyle}
        >
          playful
        </Button>
        <Button
          variant="white"
          className={`col-4 col-xl-2 border-dark ${props.selectedStyle === 2 ? "btn-sun" : ""}`}
          onClick={() => {
            props.setSelectedStyle(2);
            handleLocalStorage(2 - 1);
          }}
          // autoFocus={props.selectedStyle === 2}
        >
          earth
        </Button>
        <Button
          variant="white"
          className={`col-4 col-xl-2 border-dark ${props.selectedStyle === 3 ? "btn-sun" : ""}`}
          onClick={() => {
            props.setSelectedStyle(3);
            handleLocalStorage(3 - 1);
          }}
          // autoFocus={props.selectedStyle === 3}
        >
          poetic
        </Button>
      </Row>
      <Row className="mt-5 justify-content-center mb-5">
        <Col className="d-none d-sm-block">
          <Row>
            <img src={clothStyles[props.selectedStyle ? props.selectedStyle - 1 : 0].url2} alt="" className="" />
          </Row>
          <Row>
            <h4 className="text-center p-2">{clothStyles[props.selectedStyle ? props.selectedStyle - 1 : 0].name}</h4>
          </Row>
        </Col>
        <Col className="  col-md-6">
          <Row className="">
            <p className="text-center">Contains these colors</p>
            <ul className={`${styles.colorList} d-flex justify-content-around`}>{colorsList}</ul>
          </Row>
          <Row>
            <img src={clothStyles[props.selectedStyle ? props.selectedStyle - 1 : 0].url1} alt="" />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
