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
            {/* <li className="scroll-item">
              <img src="../assets/brands/liewood.webp" alt="First slide" />
              <h4>Liewood</h4>
            </li>
            <li className="scroll-item">
              <img src="../assets/brands/kongesimg.webp" alt="Konges Slojd logo" />
              <img className="logo_brand" src="../assets/brands/konges.webp" alt="Konges Slojd logo" />
            </li>
            <li className="scroll-item">
              <img src="../assets/brands/softgalleryimg.webp" alt="Soft Gallery logo" />
              <img className="logo_brand" src="../assets/brands/softgallery.webp" alt="Soft Gallery logo" />
            </li>
            <li className="scroll-item">
              <img src="../assets/brands/camcamimg.webp" alt="Cam Cam CPH logo" />
              <img className="logo_brand" src="../assets/brands/camcam.svg" alt="Cam Cam CPH logo" />
            </li>
            <li className="scroll-item">
              <img src="../assets/brands/small.webp" alt="Smallstuff logo" />
              <img className="logo_brand" src="../assets/brands/small.png" alt="Smallstuff logo" />
            </li>
            <li className="scroll-item">
              <img src="../assets/brands/wauw1.webp" alt="Wauw Kapow logo" />
              <img className="logo_brand wauw" src="../assets/brands/wauw.webp" alt="Wauw Kapow logo" />
            </li>
            <li className="scroll-item">
              <img src="../assets/brands/fabelabimg.webp" alt="First slide" />
              <h4>Fabelab</h4>
            </li> */}
            <li className="mask"></li>
          </ul>
        </div>
      </section>
    </div>
  );
}
