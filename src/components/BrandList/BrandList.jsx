import Button from "react-bootstrap/Button";
import { useState } from "react";
import Card from "react-bootstrap/Card";
export default function BrandList(props) {
  const brands = props.brands;
  const allBrands = brands.map((brand, i) => (
    <li key={`${brand + i}`}>
      <Card className="card_brand" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="./assets/img06.png" />
        <Card.Body>
          <Card.Title>{brand.title}</Card.Title>
          <Button
            onClick={() => {
              console.log("button");
              props.setBrand(brand);
            }}
          >
            Learn more
          </Button>
        </Card.Body>
      </Card>
    </li>
  ));

  return (
    <>
      <ul>{allBrands}</ul>
    </>
  );
}
