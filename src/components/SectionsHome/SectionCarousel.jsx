import "./SectionCarousel.scss";

import Carousel from "react-bootstrap/Carousel";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function SectionCarousel() {
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
            <li className="scroll-item">
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
              <h4>Cam Cam Cph</h4>
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
            </li>
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
