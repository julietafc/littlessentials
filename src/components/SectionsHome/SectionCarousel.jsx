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
              <img src="../assets/brands/liewood.webp" alt="Liewood logo" />
              <img className="logo_brand" src="../assets/brands/liewood.svg" alt="Liewood logo" />
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
              <img src="../assets/brands/fabelabimg.webp" alt="Fabelab logo" />
              <img className="logo_brand" src="../assets/brands/fabelab.webp" alt="Fabelab logo" />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
