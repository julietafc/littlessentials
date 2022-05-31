import "./SectionCarousel.scss";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function BrandLi(props) {
  const title = props.title.split(" ").join("");

  return (
    <li className="scroll-item">
      <Link to={`/brands?brand=${title}`}>
        <img src={`../assets/brands/${props.img2}`} alt="First slide" className="imgSquare" />
        <h4>{props.title}</h4>
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
              <img src="../assets/brands/kongesimg.webp" alt="First slide" />
              <h4>Konges Sløjd</h4>
            </li>
            <li className="scroll-item">
              <img src="../assets/brands/softgalleryimg.webp" alt="First slide" />
              <h4>Soft Gallery</h4>
            </li>
            <li className="scroll-item">
              <img src="../assets/brands/camcamimg.webp" alt="First slide" />
              <h4>Cam Cam Copenhagen</h4>
            </li>
            <li className="scroll-item">
              <img src="../assets/brands/small.webp" alt="First slide" />
              <h4>Smallstuff</h4>
            </li>
            <li className="scroll-item">
              <img src="../assets/brands/wauw1.webp" alt="First slide" />
              <h4>Wauw Kapow</h4>
            </li>
            <li className="scroll-item">
              <img src="../assets/brands/fabelabimg.webp" alt="First slide" />
              <h4>Fabelab</h4>
            </li> */}
            <li className="mask"></li>
          </ul>
        </div>
        {/* <Carousel>
          <Carousel.Item>
            <img src="../assets/brands/camcamimg.webp" alt="First slide" />
            <div className="text">
              <h4>Liewood</h4>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img src="../assets/brands/camcamimg.webp" alt="First slide" />
            <div className="text">
              <h4>Konges Sløjd</h4>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img src="../assets/brands/camcamimg.webp" alt="First slide" />
            <div className="text">
              <h4>Soft Gallery</h4>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img src="../assets/brands/camcamimg.webp" alt="First slide" />
            <div className="text">
              <h4>CamCam Copenhagen</h4>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img src="../assets/brands/camcamimg.webp" alt="First slide" />
            <div className="text">
              <h4>Smallstuff</h4>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img src="../assets/brands/camcamimg.webp" alt="First slide" />
            <div className="text">
              <h4>Wauw Kapow</h4>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img src="../assets/brands/camcamimg.webp" alt="First slide" />
            <div className="text">
              <h4>Fabelab</h4>
            </div>
          </Carousel.Item>
        </Carousel> */}
      </section>
    </div>
  );
}
