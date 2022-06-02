import "./SectionCarousel.scss";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function BrandLi(props) {
  const title = props.title.split(" ").join("");

  return (
    <li className="scroll-item">
      <Link className="link" to={`/brands?brand=${title}`}>
        <img src={`../assets/webP/${props.img1}`} alt={`products from ${props.title}`} className="imgSquare" />
        <img src={`../assets/brands/${props.logo}`} alt={`${props.title}'s logo`} className="logo_brand" />
      </Link>
    </li>
  );
}

export default function SectionCarousel() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("../json/brands.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBrands(data);
      });
  }, []);

  const brandsList = brands.map((brand, i) => <BrandLi key={"br-" + i} {...brand} />);

  return (
    <div className="wrapper">
      <section className="carousel">
        <div className="header">
          <h2>Our Partners</h2>
          <Link className="button_carousel" to="/brands">
            <Button label="learn more" />
          </Link>
        </div>
        <div className="carousel_main">
          <ul className="scroll-container" data-layoutmethod="flexbox">
            {brandsList}
            <li className="mask"></li>
          </ul>
        </div>
      </section>
    </div>
  );
}
