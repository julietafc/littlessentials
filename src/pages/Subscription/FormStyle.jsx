import React, { useState, useEffect } from "react";
import { Container, Row, Button, Col, Spinner } from "react-bootstrap";
import styles from "../Subscription/subscription.module.scss";

export default function FormStyle(props) {
  useEffect(() => {
    if (props.selectedStyle) {
      props.setSelectedStyle(Number(props.selectedStyle));
    } else {
      props.setSelectedStyle(1);
    }
  }, []);

  if (!props.selectedStyle) return <Spinner animation="border" />;

  const colorsList = props.clothStyles[props.selectedStyle - 1].colors.map((color, i) => {
    return <li key={color + i} style={{ backgroundColor: `#${color}`, width: "40px", borderRadius: "50%", aspectRatio: "1" }}></li>;
  });

  return (
    <Container className={`${styles.appear}`}>
      <Row>
        <h3 className="text-center">What style do you prefer?</h3>
      </Row>
      <Row className="justify-content-around mt-3">
        <Button
          className="col-xl-2"
          onClick={() => {
            props.setSelectedStyle(1);
          }}
          autoFocus={props.selectedStyle === 1 || !props.selectedStyle}
        >
          playful
        </Button>
        <Button
          className="col-xl-2"
          onClick={() => {
            props.setSelectedStyle(2);
          }}
          autoFocus={props.selectedStyle === 2}
        >
          earth
        </Button>
        <Button
          className="col-xl-2"
          onClick={() => {
            props.setSelectedStyle(3);
          }}
          autoFocus={props.selectedStyle === 3}
        >
          poetic
        </Button>
      </Row>
      <Row className="mt-5">
        <Col>
          <img src="./assets/im01.png" alt="" className="" />

          <h4 className="text-center p-2">{props.clothStyles[props.selectedStyle - 1].name}</h4>
        </Col>
        <Col>
          <Row>
            <ul className={`${styles.colorList} d-flex justify-content-around`}>{colorsList}</ul>
          </Row>
          <Row>
            <img src="./assets/img07.png" alt="" />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
