import "./SectionCarousel.scss";

import Carousel from "react-bootstrap/Carousel";

export default function SectionCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src="../assets/im01.png" alt="First slide" />
        <div className="text">
          <h2>lalalaa</h2>
          <p>
            Liewood is based in Copenhagen and our universe is deeply rooted in the Nordic design tradition. They advocate slow living, creating irresistible products for the modern family that will last for generations. Liewood products are created
            on the basis of original workmanship, the finest materials and with a modern approach to design.
          </p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
