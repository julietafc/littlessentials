import React, { useState, useEffect } from "react";
import styles from "../Subscription/subscription.module.scss";
import { Container, Row, Button, Col, Spinner } from "react-bootstrap";
import { clothStyles } from "../../modules/options";

export default function FormStyle(props) {
  // useEffect(() => {
  //   if (props.selectedStyle) {
  //     props.setSelectedStyle(Number(props.selectedStyle));
  //   }
  // }, []);

  // if (!props.selectedStyle) return <Spinner animation="border" />;

  const colorsList = clothStyles[props.selectedStyle ? props.selectedStyle - 1 : 0].colors.map((color, i) => {
    return <li key={color + i} style={{ backgroundColor: `#${color}`, width: "40px", borderRadius: "50%", aspectRatio: "1" }}></li>;
  });

  return (
    <Container className={styles.appear}>
      <Row>
        <h3 className="text-center">What style do you prefer?</h3>
      </Row>
      <Row className="justify-content-around mt-3">
        <Button
          variant="white"
          className={`col-xl-2 border-dark ${props.selectedStyle === 1 ? "btn-sun" : ""}`}
          onClick={() => {
            props.setSelectedStyle(1);
          }}
          // autoFocus={props.selectedStyle === 1 || !props.selectedStyle}
        >
          playful
        </Button>
        <Button
          variant="white"
          className={`col-xl-2 border-dark ${props.selectedStyle === 2 ? "btn-sun" : ""}`}
          onClick={() => {
            props.setSelectedStyle(2);
          }}
          // autoFocus={props.selectedStyle === 2}
        >
          earth
        </Button>
        <Button
          variant="white"
          className={`col-xl-2 border-dark ${props.selectedStyle === 3 ? "btn-sun" : ""}`}
          onClick={() => {
            props.setSelectedStyle(3);
          }}
          // autoFocus={props.selectedStyle === 3}
        >
          poetic
        </Button>
      </Row>
      <Row className="mt-5">
        <Col>
          <img src={clothStyles[props.selectedStyle ? props.selectedStyle - 1 : 0].url1} alt="" className="" />

          <h4 className="text-center p-2">{clothStyles[props.selectedStyle ? props.selectedStyle - 1 : 0].name}</h4>
        </Col>
        <Col>
          <Row>
            <ul className={`${styles.colorList} d-flex justify-content-around`}>{colorsList}</ul>
          </Row>
          <Row>
            <img src={clothStyles[props.selectedStyle ? props.selectedStyle - 1 : 0].url2} alt="" />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
